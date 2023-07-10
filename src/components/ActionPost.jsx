import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";
import LinkIcon from "@mui/icons-material/Link";
import { calculateLikes } from "../utils/calculateLikes";
import { toast } from "react-hot-toast";
import { usePost, useUser } from "../index";

export const ActionPost = ({ selectedPost }) => {
  const {
    isPostBookmarked,
    addToBookmarksHandler,
    removeFromBookmarksHandler,
  } = useUser();
  const { isPostLiked, likePostHandler, dislikePostHandler } = usePost();
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

  const sharePostHandler = () => {
    navigator.clipboard.writeText(
      `https://sociohaven.netlify.app/profile/${username}`
    );
    toast.success("Link copied to clipboard!");
  };

  return (
    <div className="mt-3 flex w-full items-center justify-between text-[gray] sm:w-auto sm:gap-14">
      <div
        className="flex items-center gap-1 hover:cursor-pointer hover:text-primary"
        onClick={() => toast.success("To be implemented soon!")}
      >
        <ChatBubbleOutlineOutlinedIcon />
        {comments?.length > 0 && <div>{comments?.length}</div>}
      </div>
      <div
        className={`flex items-center gap-1 hover:cursor-pointer hover:text-[#ec4899] ${
          isPostLiked(selectedPost) ? "text-[#ec4899]" : null
        }`}
        onClick={() =>
          isPostLiked(selectedPost)
            ? dislikePostHandler(_id)
            : likePostHandler(_id)
        }
      >
        {isPostLiked(selectedPost) ? (
          <FavoriteOutlinedIcon />
        ) : (
          <FavoriteBorderOutlinedIcon />
        )}
        <div>{likeCount > 0 && calculateLikes(likeCount)}</div>
      </div>
      <div
        className={`hover:cursor-pointer hover:text-[black] ${
          isPostBookmarked(_id) ? "text-[black]" : null
        }`}
        onClick={() =>
          isPostBookmarked(_id)
            ? removeFromBookmarksHandler(_id)
            : addToBookmarksHandler(_id)
        }
      >
        {isPostBookmarked(_id) ? (
          <BookmarkOutlinedIcon />
        ) : (
          <BookmarkBorderOutlinedIcon />
        )}
      </div>
      <div
        className="-rotate-45 hover:cursor-pointer hover:text-[black]"
        onClick={sharePostHandler}
      >
        <LinkIcon />
      </div>
    </div>
  );
};
