import { NavLink } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import ExploreIcon from "@mui/icons-material/Explore";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import FooterIcon from "./FooterIcon";
import { useAuth } from "../index";

export const Navbar = () => {
  const {
    currentUser: { profileAvatar },
  } = useAuth();

  return (
    <div className="absolute bottom-0 flex w-full items-center justify-around border-r py-2 md:bottom-auto md:left-0 md:h-full md:w-auto md:flex-col md:justify-normal md:gap-y-10 md:px-2 md:py-10">
      <NavLink
        to="/"
        title="Home"
        className="rounded-full p-2 hover:bg-primary"
      >
        <FooterIcon
          inactiveIcon={<HomeOutlinedIcon />}
          activeIcon={<HomeIcon />}
          route="/"
        />
      </NavLink>
      <NavLink
        to="/explore"
        title="Explore"
        className="rounded-full p-2 hover:bg-primary"
      >
        <FooterIcon
          inactiveIcon={<ExploreOutlinedIcon />}
          activeIcon={<ExploreIcon />}
          route="/explore"
        />
      </NavLink>
      <div
        className="flex h-10 w-10 items-center justify-center rounded-full hover:cursor-pointer hover:bg-primary md:order-1"
        title="Add a Post"
      >
        <AddCircleOutlineOutlinedIcon />
      </div>
      <NavLink
        to="/bookmarks"
        title="Bookmarks"
        className="rounded-full p-2 hover:bg-primary"
      >
        <FooterIcon
          inactiveIcon={<BookmarkBorderOutlinedIcon />}
          activeIcon={<BookmarkOutlinedIcon />}
          route="/bookmarks"
        />
      </NavLink>
      <NavLink
        to="/liked"
        title="Liked"
        className="rounded-full p-2 hover:bg-primary"
      >
        <FooterIcon
          inactiveIcon={<FavoriteBorderOutlinedIcon />}
          activeIcon={<FavoriteOutlinedIcon />}
          route="/liked"
        />
      </NavLink>
      <div
        className="h-6 w-6 overflow-hidden rounded-full hover:cursor-pointer"
        title="Profile"
      >
        <NavLink to="/profile">
          <img alt="profile_pic" src={profileAvatar} />
        </NavLink>
      </div>
    </div>
  );
};
