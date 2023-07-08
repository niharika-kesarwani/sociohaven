import { usePost, useUser } from "../index";
import { useEffect } from "react";
import { ProfileDetails } from "../components/ProfileDetails";
import { useParams } from "react-router-dom";
import { PostCard } from "./PostCard";

export const ProfileFeed = () => {
  const { username } = useParams();
  const {
    post: { allPosts },
  } = usePost();
  const {
    user: { selectedUser },
    getUserByUsername,
  } = useUser();

  const displayUserPosts = allPosts?.filter(
    (post) => post?.username === selectedUser?.username
  );

  const sortedDisplayUserPosts = [...displayUserPosts]?.sort((a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);
    return dateB - dateA;
  });

  useEffect(() => {
    getUserByUsername(username);
  }, [username, getUserByUsername]);

  return (
    <div className="flex grow justify-center overflow-y-auto border-r pb-5 text-xs md:px-5 md:text-base">
      <div className="flex w-full max-w-lg flex-col items-start gap-5">
        <ProfileDetails selectedUser={selectedUser} />
        <ul className="flex flex-col gap-5 px-2 md:p-0">
          {sortedDisplayUserPosts?.map((post) => (
            <PostCard post={post} key={post?._id} />
          ))}
        </ul>
      </div>
    </div>
  );
};
