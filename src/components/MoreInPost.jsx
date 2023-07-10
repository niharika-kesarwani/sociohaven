import EditSharpIcon from "@mui/icons-material/EditSharp";
import DeleteIcon from "@mui/icons-material/Delete";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";

import { useAuth, usePost, useUser } from "../index";
import { postConstants } from "../constants/post-constants";

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
  const { setPost, deletePostHandler } = usePost();
  const { SET_SHOW_ADD_NEW_POST_MODAL, EDIT_POST } = postConstants;

  const updatedCurrentUser = allUsers?.find(
    ({ username }) => username === currentUser?.username
  );

  const isFollower = updatedCurrentUser?.following?.find(
    (user) => user?.username === username
  );

  return (
    <div
      className="absolute right-1 top-6 overflow-hidden rounded bg-secondary"
      onClick={(e) => e.stopPropagation()}
    >
      {updatedCurrentUser?.username === username ? (
        <div className="over flex flex-col items-start font-bold">
          <div
            className="flex w-full items-center gap-3 px-3 py-2 hover:cursor-pointer hover:bg-primary hover:text-white"
            onClick={() => {
              setPost({ type: EDIT_POST, payload: selectedPost });
              setPost({ type: SET_SHOW_ADD_NEW_POST_MODAL, payload: true });
            }}
          >
            <div>
              <EditSharpIcon />
            </div>
            <div>Edit</div>
          </div>
          <div
            className="flex w-full items-center gap-3 px-3 py-2 hover:cursor-pointer hover:bg-primary hover:text-white"
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
          className="flex w-full items-center gap-3 px-3 py-2 hover:cursor-pointer hover:bg-primary hover:text-white"
          onClick={() => unfollowUserHandler(_id)}
        >
          <div>
            <PersonRemoveIcon />
          </div>
          <div className="font-bold">Unfollow</div>
        </div>
      ) : (
        <div
          className="flex w-full items-center gap-3 px-3 py-2 hover:cursor-pointer hover:bg-primary hover:text-white"
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
