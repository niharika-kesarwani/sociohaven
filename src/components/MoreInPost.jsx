import EditSharpIcon from "@mui/icons-material/EditSharp";
import DeleteIcon from "@mui/icons-material/Delete";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";

import { useAuth } from "../index";

export const MoreInPost = ({ selectedUser: { username } }) => {
  const { currentUser } = useAuth();
  const isFollower = currentUser?.following?.find(
    (user) => user?.username === username
  );

  return (
    <div
      className="absolute -top-1 right-0 overflow-hidden rounded bg-secondary"
      onClick={(e) => e.stopPropagation()}
    >
      {currentUser?.username === username ? (
        <div className="over flex flex-col items-start font-bold">
          <div className="flex w-full items-center gap-3 px-3 py-2 hover:cursor-pointer hover:bg-primary">
            <div>
              <EditSharpIcon />
            </div>
            <div>Edit</div>
          </div>
          <div className="flex w-full items-center gap-3 px-3 py-2 text-[red] hover:cursor-pointer hover:bg-primary">
            <div>
              <DeleteIcon />
            </div>
            <div>Delete</div>
          </div>
        </div>
      ) : isFollower ? (
        <div className="flex w-full items-center gap-3 px-3 py-2 hover:cursor-pointer hover:bg-primary">
          <div>
            <PersonRemoveIcon />
          </div>
          <div className="font-bold">Unfollow</div>
        </div>
      ) : (
        <div className="flex w-full items-center gap-3 px-3 py-2 hover:cursor-pointer hover:bg-primary">
          <div>
            <PersonAddAlt1Icon />
          </div>
          <div className="font-bold">Follow</div>
        </div>
      )}
    </div>
  );
};
