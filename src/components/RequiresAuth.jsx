import { useAuth } from "../index";
import { useLocation, Navigate } from "react-router-dom";

export const RequiresAuth = ({ children }) => {
  const { token } = useAuth();
  const location = useLocation();

  return token ? children : <Navigate to="/login" state={{ from: location }} />;
};
