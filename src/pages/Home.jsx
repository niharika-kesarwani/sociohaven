import { PostFeed } from "../components/PostFeed";
import { Suggestions } from "../components/Suggestions";

export const Home = () => {
  return (
    <div className="flex h-full">
      <PostFeed />
      <Suggestions />
    </div>
  );
};
