import React from "react";

const Footer = ({completedTaskCount=0, activeTaskCount=0}) => {
    return <>
    {completedTaskCount + activeTaskCount > 0 && (
        <div className="text-center">
            <p className="text-sm text-muted-foreground">
                {
                    completedTaskCount > 0 &&(
                        <>
                          ( •̀ ω •́ )✧ lulu đã hoàn thành {completedTaskCount} việc
                          {
                            activeTaskCount > 0 && `, còn ${activeTaskCount} việc nữa thoi !`
                          }
                        </>
                )}
                { completedTaskCount === 0 && activeTaskCount > 0 &&(
                    <>
                      Bắt đầu làm {activeTaskCount} nhiệm vụ đi cu! ^_- 
                    </>
                )}
            </p>
        </div>
    )}
    
    </>
};

export default Footer;