import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BudgetPage = () => {
  const navigate = useNavigate();
  const user_id = localStorage.getItem("user_id");
  const budgetArray = JSON.parse(localStorage.getItem("budgetData"));
  const newArray = budgetArray.filter((item) => item.userId === user_id);
  const deleteBudget = (id) => {
    if (id) {
      const updatedData = budgetArray.filter((item) => item.id !== id);
      localStorage.setItem("budgetData", JSON.stringify(updatedData));
    }
    navigate("/budget");
  };
  return (
    <div>
      <div className="flex justify-end">
        <button
          onClick={() => navigate("/budget/add")}
          className="rounded bg-gray-100 p-[8px] w-[100px] mt-[20px]"
        >
          +Add New
        </button>
      </div>
      <table className="min-w-full bg-white shadow-md rounded mt-[20px]">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-200">Name</th>
            <th className="py-2 px-4 border-b border-gray-200"> Date </th>
            <th className="py-2 px-4 border-b border-gray-200"> Type</th>
            <th className="py-2 px-4 border-b border-gray-200">Reoccuring</th>
          </tr>
        </thead>
        {newArray?.map((item) => (
          <tbody>
            <tr className="bg-gray-50">
              <td className="py-2 px-4 border-b border-gray-200">
                {item.name}
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
                {item.date}
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
                {item.type}
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
                {item.reoccurring}
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
                <div className="flex gap-[15px]">
                  <button
                    onClick={() => navigate(`/budget/edit/${item.id}`)}
                    className="rounded bg-green-700 p-[8px] w-[100px]"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteBudget(item.id)}
                    className="rounded bg-red-500 p-[8px] w-[100px]"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default BudgetPage;
