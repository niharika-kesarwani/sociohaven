import { createContext, useContext, useReducer } from "react";
import { postReducer, initialPost } from "../reducers/post-reducer";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [post, setPost] = useReducer(postReducer, initialPost);

  return (
    <PostContext.Provider value={{ post, setPost }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePost = () => useContext(PostContext);
