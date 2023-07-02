import { postConstants } from "../constants/post-constants";

const {
  SET_ALL_POSTS,
  SET_SELECTED_SORT,
  HANDLE_LIKE_POST,
  HANDLE_DISLIKE_POST,
  CREATE_POST,
  SET_SHOW_ADD_NEW_POST_MODAL,
  DELETE_POST,
  EDIT_POST,
  UPDATED_POSTS,
} = postConstants;

export const postReducer = (state, { type, payload }) => {
  switch (type) {
    case SET_ALL_POSTS:
    case HANDLE_LIKE_POST:
    case HANDLE_DISLIKE_POST:
    case CREATE_POST:
    case DELETE_POST:
    case UPDATED_POSTS:
      return { ...state, allPosts: payload };
    case SET_SELECTED_SORT:
      return { ...state, selectedSort: payload };
    case SET_SHOW_ADD_NEW_POST_MODAL:
      return { ...state, showAddNewPostModal: payload };
    case EDIT_POST:
      return { ...state, toEditPost: payload };
    default:
      return state;
  }
};

export const initialPost = {
  allPosts: [],
  selectedSort: "Latest",
  showAddNewPostModal: false,
  toEditPost: null,
};
