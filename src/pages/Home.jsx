import { NavLink } from "react-router-dom";
import { useAuth } from "../index";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import ExploreIcon from "@mui/icons-material/Explore";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";

export const Home = () => {
  const { token, logoutHandler } = useAuth();

  return (
    <div>
      Home
      <div></div>
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
  );
};
