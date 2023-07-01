import { postConstants } from "../constants/post-constants";

const {
  SET_ALL_POSTS,
  SET_SELECTED_SORT,
  HANDLE_LIKE_POST,
  HANDLE_DISLIKE_POST,
  CREATE_POST,
  SET_SHOW_ADD_NEW_POST_MODAL,
} = postConstants;

export const postReducer = (state, action) => {
  switch (action.type) {
    case SET_ALL_POSTS:
    case HANDLE_LIKE_POST:
    case HANDLE_DISLIKE_POST:
    case CREATE_POST:
      return { ...state, allPosts: action.payload };
    case SET_SELECTED_SORT:
      return { ...state, selectedSort: action.payload };
    case SET_SHOW_ADD_NEW_POST_MODAL:
      return { ...state, showAddNewPostModal: action.payload };
    default:
      return state;
  }
};

export const initialPost = {
  allPosts: [],
  selectedSort: "Latest",
  showAddNewPostModal: false,
};
