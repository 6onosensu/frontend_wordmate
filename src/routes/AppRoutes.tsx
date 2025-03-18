import { Routes, Route } from "react-router-dom";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import Dashboard from "@/pages/dashboard/Dashboard";
import ProtectedRoute from "@/routes/ProtectedRoute";
import { Search } from "@/pages/Search";
import LearningPage from "@/pages/learning/LearningPage";
import LearningController from "@/pages/learning/LearningController";
import ForgotPassword from "@/pages/auth/ForgotPassword";
import ResetPassword from "@/pages/auth/ResetPassword";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/" element={<Search />} />
      <Route
        path="/dashboard/*"
        element={
          <ProtectedRoute>
            <Routes>
              <Route path="" element={<Dashboard />} />
            </Routes>
          </ProtectedRoute>
        }
      />
      <Route
        path="/learningPage/*"
        element={
          <ProtectedRoute>
            <Routes>
              <Route path="" element={<LearningPage />} />
            </Routes>
          </ProtectedRoute>
        }
      />
      <Route
        path="/learningController/*"
        element={
          <ProtectedRoute>
            <Routes>
              <Route path="" element={<LearningController />} />
            </Routes>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
