import { Navigate, Outlet } from "react-router";
import { useAuth } from "../context/UserProvider";

export default function ProtectedRoute(): JSX.Element {
  const { user } = useAuth();
  return !user ? <Navigate to="/" /> : <Outlet />;
}
