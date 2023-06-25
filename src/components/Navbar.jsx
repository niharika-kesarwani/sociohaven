import { NavLink } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import ExploreIcon from "@mui/icons-material/Explore";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";
import FooterIcon from "./FooterIcon";
import { useAuth } from "../index";

export const Navbar = () => {
  const {
    currentUser: { profileAvatar },
  } = useAuth();

  return (
    <div className="sticky bottom-0 w-full border-r md:bottom-auto md:left-0 md:h-full md:w-auto">
      <div className="flex justify-around bg-secondary py-1 md:flex-col md:gap-5 md:bg-transparent md:px-4 md:py-5">
        <NavLink
          to="/"
          title="Home"
          className="flex items-center gap-2 rounded-full p-2 hover:bg-primary"
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
          className="flex items-center gap-2 rounded-full p-2 hover:bg-primary"
        >
          <FooterIcon
            inactiveIcon={<ExploreOutlinedIcon />}
            activeIcon={<ExploreIcon />}
            route="/explore"
          />
          <span className="hidden text-lg font-bold lg:inline">Explore</span>
        </NavLink>
        <NavLink
          className="flex items-center gap-2 rounded-full p-2 hover:cursor-pointer hover:bg-primary md:order-1"
          title="Add New Post"
        >
          <AddCircleOutlineOutlinedIcon />
          <span className="hidden text-lg font-bold lg:inline">New Post</span>
        </NavLink>
        <NavLink
          to="/bookmarks"
          title="Bookmarks"
          className="flex items-center gap-2 rounded-full p-2 hover:bg-primary"
        >
          <FooterIcon
            inactiveIcon={<BookmarkBorderOutlinedIcon />}
            activeIcon={<BookmarkOutlinedIcon />}
            route="/bookmarks"
          />
          <span className="hidden text-lg font-bold lg:inline">Bookmarks</span>
        </NavLink>
        <NavLink
          to="/profile"
          title="Profile"
          className="flex items-center gap-2 rounded-full p-2 hover:cursor-pointer hover:bg-primary"
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
    </div>
  );
};
