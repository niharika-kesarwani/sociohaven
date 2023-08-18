import { createContext, useContext, useEffect, useReducer } from "react";
import { toast } from "react-hot-toast";
import {
  allUsersHandlerService,
  allUsersBookmarksHandlerService,
  addToBookmarksHandlerService,
  removeFromBookmarksHandlerService,
  followUserHandlerService,
  unfollowUserHandlerService,
  getSingleUserHandlerService,
  editUserProfileService,
} from "../services/user-service";
import { initialUser, userReducer } from "../reducers/user-reducer";
import { userConstants } from "../constants/user-constants";
import { useAuth } from "../index";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useReducer(userReducer, initialUser);
  const { token, setCurrentUser } = useAuth();
  const navigate = useNavigate();
  const {
    GET_ALL_USERS,
    GET_ALL_BOOKMARKS,
    ADD_TO_BOOKMARKS,
    REMOVE_FROM_BOOKMARKS,
    FOLLOW_USER,
    UNFOLLOW_USER,
    SET_SINGLE_USER,
    EDIT_USER_PROFILE,
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
        toast.success("Successfully added to bookmarks!");
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
          toast.success("Successfully removed from bookmarks!");
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

  const getUserByUsername = async (username) => {
    try {
      const response = await getSingleUserHandlerService(username);
      const {
        status,
        data: { user },
      } = response;
      if (status === 200) {
        setUser({ type: SET_SINGLE_USER, payload: user });
      }
    } catch (err) {
      navigate("/login");
      toast.error("Please login again!");
      console.error(err);
    }
  };

  const editUserProfile = async (userData) => {
    try {
      const response = await editUserProfileService(userData, token);
      const {
        status,
        data: { user },
      } = response;
      if (status === 201) {
        setUser({ type: EDIT_USER_PROFILE, payload: user });
        setCurrentUser(user);
        toast.success("Successfully updated profile!");
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
  }, [token]);

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
        getUserByUsername,
        editUserProfile,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
