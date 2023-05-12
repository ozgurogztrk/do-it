import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "src/contexts/auth-context";

export default function ProtectedRoute() {
  const { currentUser } = useContext(AuthContext);
  return !!currentUser ? <Outlet /> : <Navigate to={"/sign-up"} replace />;
}
