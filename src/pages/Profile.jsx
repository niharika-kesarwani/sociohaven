import { ProfileFeed } from "../components/ProfileFeed";
import { Suggestions } from "../components/Suggestions";

export const Profile = () => {
  return (
    <div className="flex h-full">
      <ProfileFeed />
      <Suggestions />
    </div>
  );
};
