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
      <div className="pl-[196px] pt-[108px] pr-[45px] bg-blue5 pb-[50px]">
        <Outlet />
      </div>
    </div>
  );
};

export default ProtectedRoute;
