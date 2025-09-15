import React from "react";
import { Card } from "./ui/card";
import { Circle } from "lucide-react";

const EmptyTask = ({filter}) => {
    return(
       <Card className="p-8 text-center border-0 bg-gradient-card shadow-custom-md">
          <div className="space-y-3">
             <Circle className="mx-auto size-12 text-muted-foreground"/> 
             <div>
                <h3 className="font-medium text-foreground">
                    {
                    filter === 'active' ?
                    "không có nhiệm vụ nào đang làm":
                    filter === 'completed'
                    ? "không có nhiệm vụ nào được hoàn thành"
                    : "không có nhiệm vụ."
                    }
                </h3>
             </div>

          </div>
       </Card>
   )
};

export default EmptyTask;