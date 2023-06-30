import { usePost, useAuth, useUser } from "../index";
import { postConstants } from "../constants/post-constants";
import { AddNewPost } from "./AddNewPost";
import { PostCard } from "../components/PostCard";

export const PostFeed = () => {
  const { currentUser } = useAuth();
  const {
    post: { allPosts, selectedSort },
    setPost,
    sortedPosts,
  } = usePost();
  const {
    user: { allUsers },
  } = useUser();
  const { SET_SELECTED_SORT } = postConstants;

  const updatedCurrentUser = allUsers?.find(
    ({ username }) => username === currentUser?.username
  );

  const displayPosts = allPosts?.filter(
    (post) =>
      updatedCurrentUser?.following?.some(
        ({ username }) => username === post.username
      ) || post?.username === updatedCurrentUser?.username
  );

  return (
    <div className="flex grow justify-center overflow-y-auto border-r px-3 py-5 md:px-5">
      <div className="flex w-full max-w-lg flex-col gap-5">
        <AddNewPost />
        <div className="flex justify-around bg-background">
          <div
            className={`h-full w-full py-3 font-bold hover:cursor-pointer hover:bg-secondary ${
              selectedSort === "Latest" ? "bg-primary" : null
            }`}
            onClick={() =>
              setPost({ type: SET_SELECTED_SORT, payload: "Latest" })
            }
          >
            Latest
          </div>
          <div
            className={`h-full w-full py-3 font-bold hover:cursor-pointer hover:bg-secondary ${
              selectedSort === "Trending" ? "bg-primary" : null
            }`}
            onClick={() =>
              setPost({ type: SET_SELECTED_SORT, payload: "Trending" })
            }
          >
            Trending
          </div>
        </div>
        <ul className="flex flex-col gap-5">
          {sortedPosts(displayPosts)?.map((post) => (
            <PostCard post={post} key={post?._id} />
          ))}
        </ul>
      </div>
    </div>
  );
};
