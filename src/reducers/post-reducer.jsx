import { postConstants } from "../constants/post-constants";

const {
  SET_ALL_POSTS,
  SET_SELECTED_SORT,
  HANDLE_LIKE_POST,
  HANDLE_DISLIKE_POST,
} = postConstants;

export const postReducer = (state, action) => {
  switch (action.type) {
    case SET_ALL_POSTS:
      return { ...state, allPosts: action.payload };
    case SET_SELECTED_SORT:
      return { ...state, selectedSort: action.payload };
    case HANDLE_LIKE_POST:
      return { ...state, allPosts: action.payload };
    case HANDLE_DISLIKE_POST:
      return { ...state, allPosts: action.payload };
    default:
      return state;
  }
};

export const initialPost = {
  allPosts: [],
  selectedSort: "Latest",
};
