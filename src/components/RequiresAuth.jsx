import { useAuth } from "../index";
import { useLocation, Navigate } from "react-router-dom";

export const TokenRequiresAuth = ({ children }) => {
  const { token } = useAuth();
  const location = useLocation();

  return token ? children : <Navigate to="/login" state={{ from: location }} />;
};

export const CurrentUserRequiresAuth = ({ children }) => {
  const { currentUser } = useAuth();
  const location = useLocation();

  return currentUser ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};
