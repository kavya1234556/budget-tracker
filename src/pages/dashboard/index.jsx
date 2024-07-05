import React from "react";

const DashboardPage = () => {
  return (
    <>
      <div>
        <div className="flex gap-[10px]">
          <div className="border border-dashed border-2 border-sky-500 w-[300px] h-[130px] flex items-center justify-center flex-col">
            <p>
              Total Income:<span>2400</span>
            </p>
          </div>
          <div className="border border-dashed border-2 border-sky-500 w-[300px] h-[130px] flex items-center justify-center">
            <p>
              Total Expense:<span>2200</span>
            </p>
          </div>
          <div className="border border-dashed border-2 border-sky-500 w-[300px] h-[130px] flex justify-center items-center ">
            <p>
              Balance:<span>200</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
