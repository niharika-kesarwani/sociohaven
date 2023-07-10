import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useUser } from "../index";
import { calculateTime } from "../utils/calculateTime";
import { useState } from "react";
import { MoreInPost } from "./MoreInPost";
import { ActionPost } from "./ActionPost";
import { useNavigate } from "react-router-dom";

export const PostCard = ({ post }) => {
  const {
    user: { allUsers },
  } = useUser();
  const [showMorePost, setShowMorePost] = useState(false);
  const navigate = useNavigate();

  const {
    _id,
    content,
    mediaURL,
    likes: { likeCount, likedBy, dislikedBy },
    username,
    createdAt,
    updatedAt,
    comments,
  } = post;

  const selectedUser = allUsers?.find((user) => user?.username === username);

  const {
    // _id,
    firstName,
    lastName,
    // username,
    password,
    bio,
    website,
    profileAvatar,
    backgroundImage,
    // createdAt,
    // updatedAt,
    following,
    followers,
  } = selectedUser;

  return (
    <div
      className="flex w-full gap-2 break-words rounded-lg bg-background px-2 py-3 text-xs md:gap-3 md:px-3 md:pt-5 md:text-base"
      onClick={() => setShowMorePost(false)}
    >
      <div
        className="h-10 w-10 rounded-full hover:cursor-pointer"
        onClick={() => navigate(`/profile/${username}`)}
      >
        <img
          src={profileAvatar}
          alt="profile"
          className="h-10 w-10 max-w-none rounded-full object-cover"
        />
      </div>
      <div className="relative flex w-full flex-col items-start justify-between gap-1 md:gap-0">
        <div className="flex w-full items-center justify-between text-xs md:text-sm">
          <div
            className="flex flex-col items-start gap-x-1 hover:cursor-pointer sm:flex-row md:gap-1"
            onClick={() => navigate(`/profile/${username}`)}
          >
            <div className="font-bold">
              {firstName} {lastName}
            </div>
            <div className="flex gap-1">
              <div className="text-[gray]">@{username}</div>
              <div className="text-[gray]">.</div>
              <div className="text-[gray]">{calculateTime(createdAt)}</div>
            </div>
          </div>
          <div
            className="text-[gray] hover:cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              setShowMorePost(!showMorePost);
            }}
          >
            <MoreHorizIcon />
          </div>
        </div>
        {showMorePost && (
          <MoreInPost selectedUser={selectedUser} selectedPost={post} />
        )}
        <div className="text-start">{content}</div>
        {post?.mediaURL &&
          (post?.mediaURL.split("/")[4] === "image" ? (
            <img
              src={post?.mediaURL}
              alt={post?.mediaAlt}
              className="mt-3 h-auto w-full rounded-md"
            />
          ) : (
            <video
              controls
              className="mt-3 h-auto w-full rounded-xl"
              autoPlay
              loop
              muted
            >
              <source src={post?.mediaURL} type="video/mp4" />
            </video>
          ))}
        <ActionPost selectedPost={post} />
      </div>
    </div>
  );
};
