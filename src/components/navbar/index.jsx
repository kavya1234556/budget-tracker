import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleToggleModal = () => {
    setOpen((prev) => !prev);
  };

  const handleSignOut = () => {
    localStorage.removeItem("user_id");
    localStorage.removeItem("loggedIn");
    navigate("/");
    setOpen(false);
  };

  return (
    <nav className="bg-gray-800 text-white p-5 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex gap-8">
          <a
            href="/budget"
            className="text-lg font-semibold hover:text-gray-400 transition duration-300"
          >
            Dashboard Budget
          </a>
        </div>
        <button
          onClick={() => handleToggleModal()}
          className="bg-slate-300 hover:bg-white text-black font-bold py-2 px-4 rounded transition duration-300"
        >
          Sign Out
        </button>
        {open && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-md text-black w-[300px]">
              <p className="text-center mb-4">
                Are you sure you want to sign out?
              </p>
              <div className="flex justify-around">
                <button
                  onClick={handleSignOut}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300"
                >
                  Yes
                </button>
                <button
                  onClick={() => setOpen(false)}
                  className="bg-gray-300 hover:bg-gray-500 text-black font-bold py-2 px-4 rounded transition duration-300"
                >
                  No
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
