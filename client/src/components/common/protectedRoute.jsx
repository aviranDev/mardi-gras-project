import userService from "../../services/userService";
import { Navigate, Outlet } from "react-router";

const useAuth = () => {
  const currentUser = userService.getCurrentUser();
  return currentUser?.biz;
};

const ProtectedRoute = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
