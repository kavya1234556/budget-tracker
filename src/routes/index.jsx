import React from "react";
import { Route, Routes } from "react-router-dom";
import PublicRoute from "./publicRoute";
import RegisterPage from "../pages/auth/register";
import LoginPage from "../pages/auth/login";
import ProtectedRoute from "./protectedRoute";
import BudgetRoute from "./budgetRoute";

const RouteLayout = () => {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route path="/budget/*" element={<BudgetRoute />} />
      </Route>
      <Route path="*" element={<h1>Not found</h1>} />
    </Routes>
  );
};

export default RouteLayout;
