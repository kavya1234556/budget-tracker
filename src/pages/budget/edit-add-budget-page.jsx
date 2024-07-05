import React from "react";
import { useLocation } from "react-router-dom";
import useAddEditBudgetForm from "./hooks/useAddEditBudgetForm";

const EditAddBudgetPage = () => {
  const location = useLocation();
  const { errors, register, handleSubmit, Submit } = useAddEditBudgetForm();
  return (
    <div className="bg-gray-700 p-8 w-[80%]">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-4">
          {location.pathname === "/budget/add" ? "Add" : "Edit"} Transaction
        </h1>
        <form
          onSubmit={handleSubmit(Submit)}
          className="bg-white shadow-md flex flex-col justify-center gap-[20px] rounded p-6 space-y-3 w-[100%]"
        >
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium">
              Name
            </label>
            <input
              type="text"
              {...register("name")}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="amount" className="block text-gray-700 font-medium">
              Amount
            </label>
            <input
              type="number"
              {...register("amount")}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errors.amount && (
              <p className="text-red-500 text-xs mt-1">
                {errors.amount.message}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="date" className="block text-gray-700 font-medium">
              Date
            </label>
            <input
              type="date"
              {...register("date")}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errors.date && (
              <p className="text-red-500 text-xs mt-1">{errors.date.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="type" className="block text-gray-700 font-medium">
              Type
            </label>
            <select
              {...register("type")}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
            {errors.type && (
              <p className="text-red-500 text-xs mt-1">{errors.type.message}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="reoccurring"
              className="block text-gray-700 font-medium"
            >
              Reoccurring
            </label>
            <select
              {...register("reoccurring")}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="one-time">One Time</option>
              <option value="monthly">Monthly</option>
            </select>
            {errors.reoccurring && (
              <p className="text-red-500 text-xs mt-1">
                {errors.reoccurring.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="category"
              className="block text-gray-700 font-medium"
            >
              Category
            </label>
            <input
              type="text"
              {...register("category")}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errors.category && (
              <p className="text-red-500 text-xs mt-1">
                {errors.category.message}
              </p>
            )}
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-gray-400 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditAddBudgetPage;
