import { useAuth, useUser } from "../index";
import { SuggestedUserCard } from "./SuggestedUserCard";

export const Suggestions = () => {
  const { currentUser } = useAuth();
  const {
    user: { allUsers },
  } = useUser();

  const updatedCurrentUser = allUsers?.find(
    ({ username }) => username === currentUser?.username
  );

  const suggestedUsers = allUsers?.filter(
    (singleUser) =>
      singleUser?.username !== updatedCurrentUser?.username &&
      !updatedCurrentUser?.following?.some(
        ({ username }) => username === singleUser?.username
      )
  );

  return (
    <>
      <div className="hidden w-96 flex-col gap-5 overflow-y-auto p-5 large:flex">
        <div className="font-bold lg:text-xl">Suggested Users</div>
        {suggestedUsers?.length > 0 ? (
          <div className="flex flex-col gap-5">
            {[...suggestedUsers]?.map((user) => (
              <SuggestedUserCard user={user} key={user?._id} />
            ))}
          </div>
        ) : (
          <div className="pt-10 font-bold">No users!</div>
        )}
      </div>
    </>
  );
};
