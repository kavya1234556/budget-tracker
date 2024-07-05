import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-5 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex gap-8">
          <a
            href="/dashboard"
            className="text-lg font-semibold hover:text-gray-400 transition duration-300"
          >
            Dashboard
          </a>
          <a
            href="/budget"
            className="text-lg font-semibold hover:text-gray-400 transition duration-300"
          >
            Budget
          </a>
        </div>
        <button className="bg-slate-300 hover:bg-white text-black font-bold py-2 px-4 rounded transition duration-300">
          Sign Out
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
