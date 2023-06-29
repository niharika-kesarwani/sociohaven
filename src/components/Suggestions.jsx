import { useAuth, useUser } from "../index";
import { SuggestedUserCard } from "./SuggestedUserCard";

export const Suggestions = () => {
  const { currentUser } = useAuth();
  const {
    user: { allUsers },
  } = useUser();

  const suggestedUsers = allUsers?.filter(
    (singleUser) =>
      singleUser?.username !== currentUser?.username &&
      !currentUser?.following?.some(
        ({ username }) => username === singleUser?.username
      )
  );

  return (
    <>
      {suggestedUsers?.length > 0 && (
        <div className="hidden flex-col gap-5 overflow-y-auto p-5 large:flex">
          <div className="font-bold lg:text-xl">Suggested Users</div>
          <div className="flex flex-col gap-5">
            {suggestedUsers?.map((user) => (
              <SuggestedUserCard user={user} key={user?._id} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};
