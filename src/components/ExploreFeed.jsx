import { usePost } from "../index";
import { PostCard } from "./PostCard";

export const ExploreFeed = () => {
  const {
    post: { allPosts },
  } = usePost();

  const displayPosts = allPosts?.sort((a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);
    return dateB - dateA;
  });

  return (
    <div className="flex grow justify-center overflow-y-auto border-r px-3 py-5 md:px-5">
      <div className="flex w-full max-w-lg flex-col items-start gap-5">
        {displayPosts?.length > 0 ? (
          <ul className="flex w-full flex-col gap-5">
            {displayPosts?.map((post) => {
              return <PostCard post={post} key={post?._id} />;
            })}
          </ul>
        ) : (
          <div className="text-xl font-bold">No posts here yet!</div>
        )}
      </div>
    </div>
  );
};
