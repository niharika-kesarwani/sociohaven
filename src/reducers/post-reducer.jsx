import { postConstants } from "../constants/post-constants";

const { SET_ALL_POSTS, SET_SELECTED_SORT } = postConstants;

export const postReducer = (state, action) => {
  switch (action.type) {
    case SET_ALL_POSTS:
      return { ...state, allPosts: action.payload };
    case SET_SELECTED_SORT:
      return { ...state, selectedSort: action.payload };
    default:
      return state;
  }
};

export const initialPost = {
  allPosts: [],
  selectedSort: "Latest",
};
