import { Routes, Route } from "react-router-dom";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import Dashboard from "@/pages/dashboard/Dashboard";
import ProtectedRoute from "@/routes/ProtectedRoute";
import { Search } from "@/pages/Search";
import LearningPage from "@/pages/learning/LearningPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
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
    </Routes>
  );
};

export default AppRoutes;
