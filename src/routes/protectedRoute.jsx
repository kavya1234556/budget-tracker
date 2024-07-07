import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";

const ProtectedRoute = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("loggedIn");
  useEffect(() => {
    if (!isAuthenticated) {
      return navigate("/");
    }
    return () => {};
  }, [isAuthenticated, navigate]);
  return (
    <div>
      <Navbar />
      <div className="p-[50px] bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
};

export default ProtectedRoute;
