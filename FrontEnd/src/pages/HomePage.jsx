import AddTask from "@/components/AddTask";
import DateTimeFilter from "@/components/DateTimeFilter";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StatsAndFilters from "@/components/StatsAndFilters";
import TaskList from "@/components/TaskList";
import TaskListPagination from "@/components/TaskListPagination";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import api from "@/lib/axios";
import { numberTaskLimitedPerPage } from "@/lib/data";

const Homepage = () => {
    const [taskBuffer, settaskBuffer] = useState([]);
    const [activeTaskCount, setactiveTaskCount] = useState(0);
    const [completeTaskCount, setcompleteTaskCount] = useState(0);
    const [filter, setfilter] = useState("all");
    const [dateQuery, setdateQuery] = useState("today")
    const [page, setPage] = useState(1)

    useEffect(()=>{
        fetchTasks();
    }, [dateQuery])

    useEffect(()=>{
        setPage();
    }, [filter, dateQuery])
// logic
    const fetchTasks = async () => {
        try{
            const res = await api.get(`/tasks?filter=${dateQuery}`);
            settaskBuffer(res.data.tasks)
            setactiveTaskCount(res.data.activeCount)
            setcompleteTaskCount(res.data.completeCount)
        }
        catch(error){
            console.error("lỗi sảy ra khi nhận tasks từ backend", error);
            toast.error("lỗi sảy ra khi nhận tasks")
        }
    };
// biến
    const filteredTasks = taskBuffer.filter((task) => {
        switch (filter) {
            case 'active':
                return task.status === 'active';
            case 'completed':
                return task.status === 'complete';
            default:
                return true;
        }
    })
    const handleTaskChange = () => {
        fetchTasks();
    }

    const handleNext = () => {
        if(page < totalPages) {
            setPage((prev)=> prev + 1);
        }
    }

    const handlePrev = () => {
        if(page>1) {
            setPage((prev)=> prev - 1);
        }
    } 

    const handlePageChange = (newPage) => {
        setPage(newPage)
    }

    const visibleTasks = filteredTasks.slice(
        (page-1)*numberTaskLimitedPerPage,
        page*numberTaskLimitedPerPage
    )

    if (visibleTasks.length === 0){
        handlePrev()};

        
    const totalPages = Math.ceil(filteredTasks.length/numberTaskLimitedPerPage )
    return(
        <div className="min-h-screen w-full bg-white relative">
        {/* Purple Gradient Grid Right Background */}
            <div
                className="absolute inset-0 z-0"
                style={{
                backgroundImage: `
                    linear-gradient(to right, #f0f0f0 1px, transparent 1px),
                    linear-gradient(to bottom, #f0f0f0 1px, transparent 1px),
                    radial-gradient(circle 800px at 100% 200px, #d5c5ff, transparent)
                `,
                backgroundSize: "96px 64px, 96px 64px, 100% 100%",
                }}
            />
            <div className="Container pt-8 mx-auto relative z-10">
                <div className="w-full max-w-2xl p-6 mx-auto space-y-6">
                    <Header/>
                    <AddTask handleNewTaskAdded={handleTaskChange}/>
                    <StatsAndFilters
                         filter = {filter}
                         setfilter = {setfilter}
                         activeTasksCount={activeTaskCount}
                         completedTasksCount={completeTaskCount}/>
                    <TaskList filteredTasks={visibleTasks} filter={filter} handleTaskChange={handleTaskChange}/>

                    <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                        <TaskListPagination
                          handleNext={handleNext}
                          handlePrev={handlePrev}
                          handlePageChange={handlePageChange}
                          page={page}
                          totalPages={totalPages}/>
                        <DateTimeFilter dateQuery={dateQuery} setdateQuery={setdateQuery}/>
                    </div>
                    <Footer activeTaskCount={activeTaskCount} completedTaskCount={completeTaskCount}/>        
                    </div>
                </div>
        </div>
    )
};

export default Homepage;