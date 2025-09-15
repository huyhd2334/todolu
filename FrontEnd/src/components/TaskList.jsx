import React from "react";
import EmptyTask from "./EmtyTask";
import TasksCard from "./TasksCard";

const TaskList = ({filteredTasks, filter, handleTaskChange}) => {
    if (!filteredTasks || filteredTasks.length === 0){
        return <EmptyTask filter={filter}/>;
    }
    return(
       <div className="space-y-3">
          {filteredTasks.map((task, index) => (
             <TasksCard
                key={task._id ?? index}
                task = {task}
                index = {index}
                handleTaskChange={handleTaskChange}/>
          ))}
       </div>
   )
};

export default TaskList ;