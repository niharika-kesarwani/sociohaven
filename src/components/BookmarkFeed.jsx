import { useUser, usePost, useAuth } from "../index";
import { PostCard } from "../components/PostCard";

export const BookmarkFeed = () => {
  const {
    currentUser: { username },
  } = useAuth();
  const {
    user: { allBookmarks },
  } = useUser();
  const {
    post: { allPosts },
  } = usePost();

  return (
    <div className="flex grow justify-center overflow-y-auto border-r px-3 py-5 md:px-5">
      <div
        className={`flex w-full max-w-lg flex-col gap-5 ${
          allBookmarks?.length > 0 ? "items-start" : "items-center"
        }`}
      >
        <div
          className={`flex flex-col ${
            allBookmarks?.length > 0 ? "items-start" : "items-center"
          }`}
        >
          <div className="text-2xl font-bold">Bookmarks</div>
          <div className="text-sm text-[gray]">@{username}</div>
        </div>
        {allBookmarks?.length > 0 ? (
          <ul className="flex w-full flex-col gap-5">
            {[...allBookmarks]?.reverse()?.map((indPost) => {
              const post = allPosts?.find(({ _id }) => _id === indPost?._id);
              return <PostCard post={post} key={post?._id} />;
            })}
          </ul>
        ) : (
          <div className="pt-10 text-xl font-bold">No bookmarks added yet!</div>
        )}
      </div>
    </div>
  );
};
