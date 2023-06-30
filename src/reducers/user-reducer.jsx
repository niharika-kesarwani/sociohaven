import { userConstants } from "../constants/user-constants";

const {
  GET_ALL_USERS,
  GET_ALL_BOOKMARKS,
  ADD_TO_BOOKMARKS,
  REMOVE_FROM_BOOKMARKS,
  FOLLOW_USER,
  UNFOLLOW_USER,
} = userConstants;

export const userReducer = (state, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return { ...state, allUsers: action.payload };
    case GET_ALL_BOOKMARKS:
      return { ...state, allBookmarks: action.payload };
    case ADD_TO_BOOKMARKS:
      return { ...state, allBookmarks: action.payload };
    case REMOVE_FROM_BOOKMARKS:
      return { ...state, allBookmarks: action.payload };
    case FOLLOW_USER:
    case UNFOLLOW_USER:
      return {
        ...state,
        allUsers: state?.allUsers?.map((user) => {
          const changedUser = action.payload.find(
            ({ _id }) => _id === user._id
          );
          return changedUser ? changedUser : user;
        }),
      };
    default:
      return state;
  }
};

export const initialUser = {
  allUsers: [],
  allBookmarks: [],
};
