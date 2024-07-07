import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import ReactPaginate from "react-paginate";
import "../../pagination.css";
import Dashboard from "../../components/dashboard";
import { DatePicker } from "antd";
import moment from "moment";
const { RangePicker } = DatePicker;

const BudgetPage = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [reoccurring, setReoccurring] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [dates, setDates] = useState([]);
  console.log("🚀 ~ BudgetPage ~ dates:", dates);
  const itemsPerPage = 3;

  const user_id = localStorage.getItem("user_id");
  const budgetArray = JSON.parse(localStorage.getItem("budgetData"));
  const newArray = budgetArray?.filter((item) => item.userId === user_id);

  const deleteBudget = (id) => {
    if (id) {
      const updatedData = budgetArray?.filter((item) => item.id !== id);
      localStorage.setItem("budgetData", JSON.stringify(updatedData));
      toast.success("Trasaction Deleted Successfully");
    }
    navigate("/budget");
  };
  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };
  const offset = currentPage * itemsPerPage;
  const currentPageData = newArray.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(newArray.length / itemsPerPage);
  return (
    <div>
      <Dashboard />
      <div className="flex justify-end">
        <button
          onClick={() => navigate("/budget/add")}
          className="rounded bg-gray-400 p-[8px] w-[100px] mt-[20px]"
        >
          +Add New
        </button>
      </div>
      <form>
        <div className="w-[100%] flex items-center gap-[10px]">
          <input
            placeholder="Search by Name"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            className="w-[40%] h-[50px] p-[4px]"
          />
          <select
            placeholder="type"
            className="mt-1 block w-[30%] h-[50px] border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            onChange={(e) => setType(e.target.value)}
            value={type}
          >
            <option value="">All Types</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
          <select
            placeholder="reoccurring"
            className="mt-1 block w-[30%] h-[50px] border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            onChange={(e) => setReoccurring(e.target.value)}
            value={reoccurring}
          >
            <option value="">All </option>
            <option value="one-time">One Time</option>
            <option value="monthly">Monthly</option>
          </select>
          <RangePicker
            className="h-[50px]"
            onChange={(values) => {
              setDates(
                values?.map((item) => {
                  return item.format();
                })
              );
            }}
          />
        </div>
      </form>
      <table className="min-w-full bg-white shadow-md rounded mt-[20px]">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-200">Name</th>
            <th className="py-2 px-4 border-b border-gray-200"> Date </th>
            <th className="py-2 px-4 border-b border-gray-200"> Type</th>
            <th className="py-2 px-4 border-b border-gray-200">Reoccuring</th>
          </tr>
        </thead>
        {currentPageData
          ?.filter((item) => {
            const itemDate = item.date;

            const Search =
              search.toLowerCase() === ""
                ? item
                : item.name.toLowerCase().includes(search);
            const Type = type === "" || item.type === type;
            const Reoccurring =
              reoccurring === "" || item.reoccurring === reoccurring;
            if (dates && dates.length >= 2) {
              const isInDateRange =
                itemDate >= dates[0] && itemDate <= dates[1];
              return isInDateRange;
            }
            return Search && Type && Reoccurring;
          })
          ?.map((item) => (
            <tbody>
              <tr className="bg-gray-50" key={item.id}>
                <td className="py-2 px-4 border-b border-gray-200">
                  {item.name}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {item.date.split("T")[0]}
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
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default BudgetPage;
