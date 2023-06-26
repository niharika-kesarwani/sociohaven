export const PostCard = ({ post }) => {
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

  return (
    <div className="break-all border">
      {content} {createdAt} {likeCount}
    </div>
  );
};
