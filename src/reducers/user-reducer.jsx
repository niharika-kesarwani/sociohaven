import { userConstants } from "../constants/user-constants";

const { GET_ALL_USERS } = userConstants;

export const userReducer = (state, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return { ...state, allUsers: action.payload };
    default:
      return state;
  }
};

export const initialUser = {
  allUsers: [],
};
