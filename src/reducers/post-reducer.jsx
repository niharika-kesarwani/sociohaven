import { postConstants } from "../constants/post-constants";

const { SET_SELECTED_SORT } = postConstants;

export const postReducer = (state, action) => {
  switch (action.payload) {
    case SET_SELECTED_SORT:
      return { ...state, selectedSort: action.item };
    default:
      return state;
  }
};

export const initialPost = {
  selectedSort: "Latest",
};
