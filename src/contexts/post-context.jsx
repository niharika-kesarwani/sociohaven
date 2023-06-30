import { createContext, useContext, useEffect, useReducer } from "react";
import { postReducer, initialPost } from "../reducers/post-reducer";
import {
  getAllPostsService,
  likePostHandlerService,
  dislikePostHandlerService,
} from "../services/post-service";
import { postConstants } from "../constants/post-constants";
import { useAuth } from "../index";
import { toast } from "react-hot-toast";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [post, setPost] = useReducer(postReducer, initialPost);
  const { SET_ALL_POSTS, HANDLE_LIKE_POST, HANDLE_DISLIKE_POST } =
    postConstants;
  const { token, currentUser } = useAuth();

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

  const isPostLiked = (post) => {
    return post?.likes?.likedBy?.find(
      ({ username }) => username === currentUser?.username
    );
  };

  const likePostHandler = async (postId) => {
    try {
      const response = await likePostHandlerService(postId, token);
      const {
        status,
        data: { posts },
      } = response;
      if (status === 201) {
        setPost({ type: HANDLE_LIKE_POST, payload: posts });
        toast.success("Liked post successfully!");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const dislikePostHandler = async (postId) => {
    try {
      const response = await dislikePostHandlerService(postId, token);
      const {
        status,
        data: { posts },
      } = response;
      if (status === 201) {
        setPost({ type: HANDLE_DISLIKE_POST, payload: posts });
        toast.success("Disliked post successfully!");
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
    <PostContext.Provider
      value={{
        post,
        setPost,
        isPostLiked,
        likePostHandler,
        dislikePostHandler,
        sortedPosts,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export const usePost = () => useContext(PostContext);
