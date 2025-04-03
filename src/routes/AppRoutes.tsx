import { Routes, Route } from "react-router-dom";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import Dashboard from "@/pages/dashboard/Dashboard";
import { Search } from "@/pages/Search";
import LearningPage from "@/pages/learning/LearningPage";
import LearningSession from "@/pages/learning/LearningSession";
import ForgotPassword from "@/pages/auth/ForgotPassword";
import ResetPassword from "@/pages/auth/ResetPassword";
import ProtectedRouteWrapper from "./ProtectedRouteWrapper";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/" element={<Search />} />

      <Route element={<ProtectedRouteWrapper />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/learningPage" element={<LearningPage />} />
        <Route path="/learningSession" element={<LearningSession />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
