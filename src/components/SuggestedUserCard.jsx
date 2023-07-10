import { useNavigate } from "react-router-dom";
import { useUser } from "../";
import { userConstants } from "../constants/user-constants";

export const SuggestedUserCard = ({ user, searchResult }) => {
  const { setUser, followUserHandler } = useUser();
  const { SET_SHOW_SEARCH_RESULTS, SET_SEARCH_INPUT } = userConstants;
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
  } = user;
  const navigate = useNavigate();

  return (
    <div
      key={_id}
      className="flex items-center gap-4 rounded-2xl bg-background p-3 text-xs md:text-base"
      onClick={() => {
        setUser({ type: SET_SHOW_SEARCH_RESULTS, payload: false });
        setUser({ type: SET_SEARCH_INPUT, payload: "" });
      }}
    >
      <div
        className="flex h-10 w-10 items-center rounded-full hover:cursor-pointer"
        onClick={() => navigate(`/profile/${username}`)}
      >
        <img className="rounded-full" src={profileAvatar} alt="profile_pic" />
      </div>
      <div
        className="line-clamp-1 flex grow flex-col text-left hover:cursor-pointer"
        onClick={() => navigate(`/profile/${username}`)}
      >
        <div className="line-clamp-1 font-bold">
          {firstName} {lastName}
        </div>
        <div className="line-clamp-1 text-[gray]">@{username}</div>
      </div>
      {!searchResult && (
        <div>
          <button
            className="rounded-full bg-secondary px-4 py-2 font-bold hover:cursor-pointer hover:bg-primary hover:text-white"
            onClick={() => followUserHandler(_id)}
          >
            Follow
          </button>
        </div>
      )}
    </div>
  );
};
