import { BookmarkFeed } from "../components/BookmarkFeed";
import { Suggestions } from "../components/Suggestions";

export const Bookmarks = () => {
  return (
    <div className="flex h-full">
      <BookmarkFeed />
      <Suggestions />
    </div>
  );
};
