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
    <div className="absolute bottom-0 flex w-full  justify-around border-r py-2 md:bottom-auto md:left-0 md:h-full md:w-auto md:flex-col md:px-2">
      <NavLink
        to="/"
        title="Home"
        className="flex items-center gap-2 rounded-full px-4 py-2 hover:bg-primary"
      >
        <FooterIcon
          inactiveIcon={<HomeOutlinedIcon />}
          activeIcon={<HomeIcon />}
          route="/"
        />
        <span className="hidden text-lg font-bold lg:inline">Home</span>
      </NavLink>
      <NavLink
        to="/explore"
        title="Explore"
        className="flex items-center gap-2 rounded-full px-4 py-2 hover:bg-primary"
      >
        <FooterIcon
          inactiveIcon={<ExploreOutlinedIcon />}
          activeIcon={<ExploreIcon />}
          route="/explore"
        />
        <span className="hidden text-lg font-bold lg:inline">Explore</span>
      </NavLink>
      <NavLink
        className="flex items-center gap-2 rounded-full px-4 py-2 hover:cursor-pointer hover:bg-primary md:order-1"
        title="Add a Post"
      >
        <AddCircleOutlineOutlinedIcon />
        <span className="hidden text-lg font-bold lg:inline">Add New Post</span>
      </NavLink>
      <NavLink
        to="/bookmarks"
        title="Bookmarks"
        className="flex items-center gap-2 rounded-full px-4 py-2 hover:bg-primary"
      >
        <FooterIcon
          inactiveIcon={<BookmarkBorderOutlinedIcon />}
          activeIcon={<BookmarkOutlinedIcon />}
          route="/bookmarks"
        />
        <span className="hidden text-lg font-bold lg:inline">Bookmarks</span>
      </NavLink>
      <NavLink
        to="/liked"
        title="Liked"
        className="flex items-center gap-2 rounded-full px-4 py-2 hover:bg-primary"
      >
        <FooterIcon
          inactiveIcon={<FavoriteBorderOutlinedIcon />}
          activeIcon={<FavoriteOutlinedIcon />}
          route="/liked"
        />
        <span className="hidden text-lg font-bold lg:inline">Liked Posts</span>
      </NavLink>
      <NavLink
        to="/profile"
        title="Profile"
        className="flex items-center gap-2 rounded-full px-4 py-2 hover:cursor-pointer hover:bg-primary"
      >
        <div className="h-6 w-6 rounded-full">
          <img
            alt="profile_pic"
            src={profileAvatar}
            className="h-6 w-6 rounded-full"
          />
        </div>
        <span className="hidden text-lg font-bold lg:inline">Profile</span>
      </NavLink>
    </div>
  );
};
