import { NavLink } from "react-router-dom";
import { useAuth } from "../index";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";

export const ProfileFeed = () => {
  const { token, logoutHandler } = useAuth();

  return (
    <div className="flex grow justify-center overflow-y-auto border-r px-3 py-5 md:px-5">
      <div className="flex w-full max-w-lg flex-col items-start gap-5">
        <div>
          <NavLink
            title={token ? "Log out" : "Log in"}
            to={!token && "/login"}
            onClick={token && logoutHandler}
          >
            {token ? <LogoutIcon /> : <LoginIcon />}
          </NavLink>
        </div>
      </div>
    </div>
  );
};
