import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const userId = localStorage.getItem("user_id");
  const budgetData = JSON.parse(localStorage.getItem("budgetData"));
  const newData = budgetData?.filter((item) => item.userId === userId);
  useEffect(() => {
    const total_income = newData
      ?.filter((item) => item.type === "income")
      ?.map((item) => item.amount)
      ?.reduce((total, amount) => total + amount, 0);
    setIncome(total_income);

    const total_expense = newData
      ?.filter((item) => item.type === "expense")
      ?.map((item) => item.amount)
      ?.reduce((total, amount) => total + amount, 0);
    setExpense(total_expense);
  }, [income, budgetData]);
  const budget = income - expense;
  return (
    <>
      <div>
        <div className="flex gap-[100px]">
          <div className="border border-dashed border-2 border-sky-500 w-[300px] h-[130px] flex items-center justify-center flex-col">
            <p>
              Total Income:<span>{newData == null ? 0 : income}</span>
            </p>
          </div>
          <div className="border border-dashed border-2 border-sky-500 w-[300px] h-[130px] flex items-center justify-center">
            <p>
              Total Expense:<span>{newData == null ? 0 : expense}</span>
            </p>
          </div>
          <div className="border border-dashed border-2 border-sky-500 w-[300px] h-[130px] flex justify-center items-center ">
            <p>
              Balance:<span>{newData == null ? 0 : budget}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
