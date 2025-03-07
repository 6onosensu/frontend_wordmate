import { Navigate } from "react-router-dom";
import { ReactNode } from "react";
import { useAuth } from "@/context/AuthContext";
import { WordProvider } from "@/context/WordContext";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { token } = useAuth();
  if (!token) {
    return <Navigate to="/" replace />;
  }
  return (
    <WordProvider> 
      {children}
    </WordProvider>
  );
};

export default ProtectedRoute;
