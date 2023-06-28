import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";
import LinkIcon from "@mui/icons-material/Link";
import { calculateLikes } from "../utils/calculateLikes";

export const ActionPost = ({ selectedPost }) => {
  const {
    _id,
    content,
    mediaURL,
    likes: { likeCount, likedBy, dislikedBy },
    username,
    createdAt,
    updatedAt,
    comments,
  } = selectedPost;

  return (
    <div className="mt-3 flex w-full items-center justify-between text-[gray] sm:w-auto sm:gap-14">
      <div className="flex items-center gap-1 hover:cursor-pointer hover:text-primary">
        <ChatBubbleOutlineOutlinedIcon />
        {comments?.length > 0 && <div>{comments?.length}</div>}
      </div>
      <div className="flex items-center gap-1 hover:cursor-pointer hover:text-[#ec4899]">
        {likeCount > 0 ? (
          <FavoriteBorderOutlinedIcon />
        ) : (
          <FavoriteOutlinedIcon />
        )}
        <div>{calculateLikes(likeCount)}</div>
      </div>
      <div className="hover:cursor-pointer hover:text-[green]">
        {/* change logic here */}
        {likeCount > 0 ? (
          <BookmarkBorderOutlinedIcon />
        ) : (
          <BookmarkOutlinedIcon />
        )}
      </div>
      <div className="-rotate-45 hover:cursor-pointer hover:text-[black]">
        <LinkIcon />
      </div>
    </div>
  );
};
