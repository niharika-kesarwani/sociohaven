import EditSharpIcon from "@mui/icons-material/EditSharp";
import DeleteIcon from "@mui/icons-material/Delete";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";

import { useAuth, usePost, useUser } from "../index";

export const MoreInPost = ({
  selectedUser: { _id, username },
  selectedPost,
}) => {
  const { currentUser } = useAuth();
  const {
    user: { allUsers },
    followUserHandler,
    unfollowUserHandler,
    removeFromBookmarksHandler,
  } = useUser();
  const { deletePostHandler } = usePost();

  const updatedCurrentUser = allUsers?.find(
    ({ username }) => username === currentUser?.username
  );

  const isFollower = updatedCurrentUser?.following?.find(
    (user) => user?.username === username
  );

  return (
    <div
      className="absolute -top-1 right-0 overflow-hidden rounded bg-secondary"
      onClick={(e) => e.stopPropagation()}
    >
      {updatedCurrentUser?.username === username ? (
        <div className="over flex flex-col items-start font-bold">
          <div className="flex w-full items-center gap-3 px-3 py-2 hover:cursor-pointer hover:bg-primary">
            <div>
              <EditSharpIcon />
            </div>
            <div>Edit</div>
          </div>
          <div
            className="flex w-full items-center gap-3 px-3 py-2 text-[red] hover:cursor-pointer hover:bg-primary"
            onClick={() => {
              deletePostHandler(selectedPost._id);
              removeFromBookmarksHandler(selectedPost._id, true);
            }}
          >
            <div>
              <DeleteIcon />
            </div>
            <div>Delete</div>
          </div>
        </div>
      ) : isFollower ? (
        <div
          className="flex w-full items-center gap-3 px-3 py-2 hover:cursor-pointer hover:bg-primary"
          onClick={() => unfollowUserHandler(_id)}
        >
          <div>
            <PersonRemoveIcon />
          </div>
          <div className="font-bold">Unfollow</div>
        </div>
      ) : (
        <div
          className="flex w-full items-center gap-3 px-3 py-2 hover:cursor-pointer hover:bg-primary"
          onClick={() => followUserHandler(_id)}
        >
          <div>
            <PersonAddAlt1Icon />
          </div>
          <div className="font-bold">Follow</div>
        </div>
      )}
    </div>
  );
};
