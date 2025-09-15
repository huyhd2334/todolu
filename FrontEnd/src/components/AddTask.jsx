import React, { useState } from "react";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import axios from "axios";
import { toast } from "sonner";
import api from "@/lib/axios";

const AddTask = ({handleNewTaskAdded}) => {
    const [newTaskTitle, setNewTaskTitle] = useState("");
    const addTask = async () => {
      if(newTaskTitle.trim()){
        try {
          await api.post("/tasks", {title: newTaskTitle});
          toast.success(`Nhiệm vụ ${newTaskTitle} đã được thêm vào`);
          handleNewTaskAdded();
        }catch(error){
         console.error("Lỗi sảy ra khi thêm task.", error);
         toast.error(`lỗi khi add task`)
        }
        setNewTaskTitle("")
      }else{
        toast.error("Bạn cần nhập nội dung nhiệm vụ")
      }
    };

    const handlekeyPress = (even) => {
      if (even.key === "Enter") {
        addTask();
      }
    }
    return(
       <Card className="p-6 border-0 bg-gradient-card shadow-custom-lg">
          <div className="flex flex-col gap-3 sm:flex-row">
            <Input type="text"
                   placeholder="cần phải làm gì"
                   className="h-12 text-base bg-slate-50 sm: flex-1 border-border/50 focus: border-primary/50 focus:ring-primary/20"
                   value={newTaskTitle} 
                   onChange={(even) => setNewTaskTitle(even.target.value)}
                   onKeyPress={handlekeyPress}/>

            <Button variant = "gradient"
                    size = "xl"
                    className="px-6"
                    onClick = {addTask}
                    disabled={!newTaskTitle.trim()}>
                <Plus className="size-5"/>
                    thêm 
            </Button>
          </div>
       </Card>
   )
};

export default AddTask;