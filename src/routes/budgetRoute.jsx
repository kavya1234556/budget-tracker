import { Outlet, Route, Routes } from "react-router-dom";
import BudgetPage from "../pages/budget";
import EditAddBudgetPage from "../pages/budget/edit-add-budget-page";

const BudgetRoute = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route index element={<BudgetPage />} />
        <Route path="edit/:id" element={<EditAddBudgetPage />} />
        <Route path="add" element={<EditAddBudgetPage />} />
      </Route>
    </Routes>
  );
};
export default BudgetRoute;
