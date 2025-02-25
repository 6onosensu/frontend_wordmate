import { Navigate } from "react-router-dom";
import { ReactNode } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const token = localStorage.getItem("token") || sessionStorage.getItem("token");

  return token ? <>{children}</> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
