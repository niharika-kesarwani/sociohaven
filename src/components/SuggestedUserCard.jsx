import { useUser } from "../";

export const SuggestedUserCard = ({ user }) => {
  const { followUserHandler } = useUser();
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

  return (
    <div
      key={_id}
      className="flex items-center gap-4 rounded-2xl bg-background p-3"
    >
      <div className="flex h-10 w-10 items-center rounded-full">
        <img className="rounded-full" src={profileAvatar} alt="profile_pic" />
      </div>
      <div className="line-clamp-1 flex grow flex-col text-left">
        <div className="line-clamp-1 font-bold">
          {firstName} {lastName}
        </div>
        <div className="line-clamp-1 text-[gray]">@{username}</div>
      </div>
      <div>
        <button
          className="rounded-full bg-secondary px-3 py-1 font-bold hover:cursor-pointer hover:bg-primary"
          onClick={() => followUserHandler(_id)}
        >
          Follow
        </button>
      </div>
    </div>
  );
};
