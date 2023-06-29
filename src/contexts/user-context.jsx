import { createContext, useContext, useEffect, useReducer } from "react";
import {
  allUsersHandlerService,
  allUsersBookmarksHandlerService,
  addToBookmarksHandlerService,
} from "../services/user-service";
import { initialUser, userReducer } from "../reducers/user-reducer";
import { userConstants } from "../constants/user-constants";
import { useAuth } from "../index";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useReducer(userReducer, initialUser);
  const { token } = useAuth();
  const { GET_ALL_USERS, GET_ALL_BOOKMARKS, ADD_TO_BOOKMARKS } = userConstants;

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
      }
    } catch (err) {
      console.log(err);
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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
