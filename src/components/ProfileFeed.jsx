import { NavLink, useParams } from "react-router-dom";
import { useAuth, usePost, useUser } from "../index";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { useEffect } from "react";

export const ProfileFeed = () => {
  const { username } = useParams();
  const { token, currentUser, logoutHandler } = useAuth();
  const {
    post: { allPosts },
  } = usePost();
  const {
    user: { selectedUser },
    getUserByUsername,
  } = useUser();

  const displayUserPosts = allPosts?.filter(
    (post) => post?.username === selectedUser?.username
  );

  useEffect(() => {
    getUserByUsername(username);
  }, [username, getUserByUsername]);

  return (
    <div className="flex grow justify-center overflow-y-auto border-r px-3 py-5 md:px-5">
      <div className="flex w-full max-w-lg flex-col items-start gap-5 bg-primary">
        <div>
          <NavLink
            title={token ? "Log out" : "Log in"}
            to={!token && "/login"}
            onClick={token && logoutHandler}
          >
            {token ? <LogoutIcon /> : <LoginIcon />}
            {username}
          </NavLink>
        </div>
      </div>
    </div>
  );
};
