import { createContext, useContext } from "react";
import { userHandlerService } from "../services/user-service";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const getUserHandler = async (userId) => {
    try {
      const response = await userHandlerService(userId);
      const {
        data: { user },
        status,
      } = response;
      if (status === 200) {
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <UserContext.Provider value={{ getUserHandler }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
