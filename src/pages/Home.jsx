import { NavLink } from "react-router-dom";
import { useAuth } from "../index";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";

export const Home = () => {
  const { token, logoutHandler } = useAuth();
  
  return <div>Home<div>
  <NavLink title={token ? "Log out" : "Log in"} to={!token && "/login"} onClick={token && logoutHandler}>
    {token ? <LogoutIcon /> : <LoginIcon />}
  </NavLink>
</div></div>;
};
