import { createContext, useContext, useEffect, useReducer } from "react";
import { allUsersHandlerService } from "../services/user-service";
import { initialUser, userReducer } from "../reducers/user-reducer";
import { userConstants } from "../constants/user-constants";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useReducer(userReducer, initialUser);
  const { GET_ALL_USERS } = userConstants;

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

  useEffect(() => {
    getAllUsersHandler();
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        getAllUsersHandler,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
