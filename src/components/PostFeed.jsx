import { AddNewPost } from "./AddNewPost";

export const PostFeed = () => {
  return (
    <div className="flex grow justify-center border-r p-5">
      <div className="flex w-full max-w-lg flex-col">
        <AddNewPost />
      </div>
    </div>
  );
};
