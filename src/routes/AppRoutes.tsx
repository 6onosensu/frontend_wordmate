import { Routes, Route } from "react-router-dom";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Dashboard from "@/pages/Dashboard";
import ProtectedRoute from "@/routes/ProtectedRoute";
import { Search } from "@/pages/Search";
import LearningPage from "@/pages/LearningPage";

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
