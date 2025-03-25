import { Outlet } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

const ProtectedRouteWrapper = () => (
  <ProtectedRoute>
    <Outlet />
  </ProtectedRoute>
);

export default ProtectedRouteWrapper;