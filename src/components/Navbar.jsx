import { NavLink } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import ExploreIcon from "@mui/icons-material/Explore";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PersonIcon from "@mui/icons-material/Person";
import FooterIcon from "./FooterIcon";
import { useAuth, usePost } from "../index";
import { postConstants } from "../constants/post-constants";

export const Navbar = () => {
  const {
    currentUser: { username },
  } = useAuth();
  const { setPost } = usePost();
  const { SET_SHOW_ADD_NEW_POST_MODAL } = postConstants;

  return (
    <div className="sticky bottom-0 w-full border-r md:bottom-auto md:left-0 md:h-full md:w-auto">
      <div className="flex justify-around bg-secondary py-1 md:flex-col md:gap-5 md:bg-transparent md:px-4 md:py-5">
        <NavLink to="/" title="Home">
          <FooterIcon
            inactiveIcon={<HomeOutlinedIcon />}
            activeIcon={<HomeIcon />}
            route="/"
            text="Home"
          />
        </NavLink>
        <NavLink to="/explore" title="Explore">
          <FooterIcon
            inactiveIcon={<ExploreOutlinedIcon />}
            activeIcon={<ExploreIcon />}
            route="/explore"
            text="Explore"
          />
        </NavLink>
        <NavLink
          className="flex w-fit items-center gap-2 rounded-full px-4 py-2 font-bold tracking-widest hover:cursor-pointer hover:text-white md:order-1 lg:bg-secondary lg:hover:bg-primary"
          title="Add New Post"
          onClick={() =>
            setPost({ type: SET_SHOW_ADD_NEW_POST_MODAL, payload: true })
          }
        >
          <AddCircleOutlineOutlinedIcon />
          <span className="hidden text-lg lg:inline">New Post</span>
        </NavLink>
        <NavLink to="/bookmarks" title="Bookmarks">
          <FooterIcon
            inactiveIcon={<BookmarkBorderOutlinedIcon />}
            activeIcon={<BookmarkOutlinedIcon />}
            route="/bookmarks"
            text="Bookmarks"
          />
        </NavLink>
        <NavLink to={`/profile/${username}`} title="Profile">
          <FooterIcon
            inactiveIcon={<PersonOutlineIcon />}
            activeIcon={<PersonIcon />}
            route={`/profile/${username}`}
            text="Profile"
          />
        </NavLink>
      </div>
    </div>
  );
};
