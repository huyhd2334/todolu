import React from "react";

const Footer = ({ completedTasksCount = 0, activeTasksCount = 0, user }) => {
  return (
    <>
      {completedTasksCount + activeTasksCount > 0 && (
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            {completedTasksCount > 0 && (
              <>
                ( •̀ ω •́ )✧ Tuyệt vời! {user} đã hoàn thành {completedTasksCount} việc
                {activeTasksCount > 0 &&
                  `, còn ${activeTasksCount} việc nữa thôi. Cố lên!`}
              </>
            )}

            {completedTasksCount === 0 && activeTasksCount > 0 && (
              <>Bắt đầu làm {activeTasksCount} nhiệm vụ đi cu ^_-!</>
            )}
          </p>
        </div>
      )}
    </>
  );
};

export default Footer;
