import { NavLink } from "react-router-dom";
import LinkIcon from "@mui/icons-material/Link";
import { useAuth, useUser } from "../index";
import { userConstants } from "../constants/user-constants";

export const ProfileDetails = ({ selectedUser }) => {
  const { token, currentUser, logoutHandler } = useAuth();
  const {
    user: { allUsers },
    setUser,
    followUserHandler,
    unfollowUserHandler,
  } = useUser();
  const { SET_SHOW_EDIT_PROFILE_MODAL } = userConstants;
  const {
    _id,
    firstName,
    lastName,
    username,
    password,
    bio,
    website,
    profileAvatar,
    backgroundImage,
    createdAt,
    updatedAt,
    following,
    followers,
    bookmarks,
  } = selectedUser;

  const updatedCurrentUser = allUsers?.find(
    ({ username }) => username === currentUser?.username
  );

  const isFollowing = updatedCurrentUser?.following?.some(
    (user) => user?.username === username
  );

  return (
    <div className="w-full">
      {backgroundImage !== "" ? (
        <img
          src={backgroundImage}
          className="max-h-24 w-full object-cover md:max-h-48"
          alt="background_image"
        />
      ) : (
        <div className="h-24 w-full bg-secondary md:h-40"></div>
      )}
      <div className="relative flex p-3">
        <img
          className="absolute -top-8 left-3 h-16 w-16 rounded-full border-2 border-white object-cover md:-top-16 md:left-5 md:h-32 md:w-32 md:border-4"
          src={profileAvatar}
          alt="profile_image"
        />{" "}
        <div className="flex w-full flex-col gap-2 text-left">
          {currentUser?.username === username ? (
            <div className="flex gap-2 self-end md:gap-5">
              <div
                className="rounded-full border bg-background px-3 py-1 font-bold hover:cursor-pointer hover:bg-primary hover:text-white md:px-4 md:py-2"
                onClick={() =>
                  setUser({ type: SET_SHOW_EDIT_PROFILE_MODAL, payload: true })
                }
              >
                Edit Profile
              </div>
              <NavLink
                title={token ? "Log out" : "Log in"}
                to={!token && "/login"}
                onClick={token && logoutHandler}
                className="rounded-full border bg-background px-3 py-1 font-bold hover:cursor-pointer hover:bg-primary hover:text-white md:px-4 md:py-2"
              >
                Logout
              </NavLink>
            </div>
          ) : (
            <div
              className="self-end rounded-full border bg-background px-3 py-1 font-bold hover:cursor-pointer hover:bg-primary hover:text-white md:px-4 md:py-2"
              onClick={() =>
                isFollowing ? unfollowUserHandler(_id) : followUserHandler(_id)
              }
            >
              {isFollowing ? "Unfollow" : "Follow"}
            </div>
          )}
          <div className="flex flex-col items-start md:pt-6">
            <div className="font-bold">
              {firstName} {lastName}
            </div>
            <div className="text-sm text-[gray]">@{username}</div>
          </div>
          <div>{bio}</div>
          {website && (
            <NavLink
              className="flex items-center gap-1"
              to={website}
              target="_blank"
            >
              <LinkIcon className="-rotate-45 text-[gray]" />
              <span className="text-primary hover:underline">{website}</span>
            </NavLink>
          )}
          <div className="flex gap-5">
            <div>
              <span className="font-bold">{following?.length}</span>{" "}
              <span className="text-[gray]">Following</span>
            </div>
            <div>
              <span className="font-bold">{followers?.length}</span>{" "}
              <span className="text-[gray]">Followers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
