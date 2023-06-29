import { createContext, useContext, useEffect, useReducer } from "react";
import { postReducer, initialPost } from "../reducers/post-reducer";
import { getAllPostsService } from "../services/post-service";
import { postConstants } from "../constants/post-constants";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [post, setPost] = useReducer(postReducer, initialPost);
  const { SET_ALL_POSTS } = postConstants;

  const getAllPosts = async () => {
    try {
      const response = await getAllPostsService();
      const {
        status,
        data: { posts },
      } = response;
      if (status === 200) {
        setPost({ type: SET_ALL_POSTS, payload: posts });
      }
    } catch (err) {
      console.error(err);
    }
  };

  const sortedPosts = (posts) => {
    const { selectedSort } = post;
    if (selectedSort === "Latest") {
      return [...posts]?.sort((a, b) => {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);
        return dateB - dateA;
      });
    } else {
      return [...posts]?.sort((a, b) => b.likes.likeCount - a.likes.likeCount);
    }
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <PostContext.Provider value={{ post, setPost, sortedPosts }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePost = () => useContext(PostContext);
