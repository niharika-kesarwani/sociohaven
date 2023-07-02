import { createContext, useContext, useEffect, useReducer } from "react";
import { toast } from "react-hot-toast";
import {
  allUsersHandlerService,
  allUsersBookmarksHandlerService,
  addToBookmarksHandlerService,
  removeFromBookmarksHandlerService,
  followUserHandlerService,
  unfollowUserHandlerService,
} from "../services/user-service";
import { initialUser, userReducer } from "../reducers/user-reducer";
import { userConstants } from "../constants/user-constants";
import { useAuth } from "../index";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useReducer(userReducer, initialUser);
  const { token } = useAuth();
  const {
    GET_ALL_USERS,
    GET_ALL_BOOKMARKS,
    ADD_TO_BOOKMARKS,
    REMOVE_FROM_BOOKMARKS,
    FOLLOW_USER,
    UNFOLLOW_USER,
  } = userConstants;

  const getAllUsersHandler = async () => {
    try {
      const response = await allUsersHandlerService();
      const {
        status,
        data: { users },
      } = response;
      if (status === 200) {
        setUser({ type: GET_ALL_USERS, payload: users });
      }
    } catch (err) {
      console.error(err);
    }
  };

  const getAllBookmarksHandler = async () => {
    try {
      const response = await allUsersBookmarksHandlerService(token);
      const {
        status,
        data: { bookmarks },
      } = response;
      if (status === 200) {
        setUser({ type: GET_ALL_BOOKMARKS, payload: bookmarks });
      }
    } catch (err) {
      console.error(err);
    }
  };

  const isPostBookmarked = (postId) =>
    user?.allBookmarks?.find(({ _id }) => _id === postId);

  const addToBookmarksHandler = async (postId) => {
    try {
      const response = await addToBookmarksHandlerService(postId, token);
      const {
        status,
        data: { bookmarks },
      } = response;
      if (status === 200) {
        setUser({ type: ADD_TO_BOOKMARKS, payload: bookmarks });
        toast.success("Added to bookmarks successfully!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const removeFromBookmarksHandler = async (postId, doNotShowToast) => {
    try {
      const response = await removeFromBookmarksHandlerService(postId, token);
      const {
        status,
        data: { bookmarks },
      } = response;
      if (status === 200) {
        setUser({ type: REMOVE_FROM_BOOKMARKS, payload: bookmarks });
        !doNotShowToast &&
          toast.success("Removed from bookmarks successfully!");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const followUserHandler = async (followUserId) => {
    try {
      const response = await followUserHandlerService(followUserId, token);
      const {
        status,
        data: { user, followUser },
      } = response;
      if (status === 200) {
        setUser({ type: FOLLOW_USER, payload: [user, followUser] });
        toast.success(`Successfully followed ${followUser?.username}!`);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const unfollowUserHandler = async (followUserId) => {
    try {
      const response = await unfollowUserHandlerService(followUserId, token);
      const {
        status,
        data: { user, followUser },
      } = response;
      if (status === 200) {
        setUser({ type: UNFOLLOW_USER, payload: [user, followUser] });
        toast.success(`Successfully unfollowed ${followUser?.username}!`);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getAllUsersHandler();
    if (token) {
      getAllBookmarksHandler();
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        getAllUsersHandler,
        getAllBookmarksHandler,
        isPostBookmarked,
        addToBookmarksHandler,
        removeFromBookmarksHandler,
        followUserHandler,
        unfollowUserHandler,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
