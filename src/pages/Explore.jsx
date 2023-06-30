import { ExploreFeed } from "../components/ExploreFeed";
import { Suggestions } from "../components/Suggestions";

export const Explore = () => {
  return (
    <div className="flex h-full">
      <ExploreFeed />
      <Suggestions />
    </div>
  );
};
