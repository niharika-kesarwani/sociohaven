import axios from "axios";

export const getAllPostsService = async () => await axios.get("/api/posts");

export const likePostHandlerService = async (postId, token) =>
  await axios.post(
    `/api/posts/like/${postId}`,
    {},
    { headers: { authorization: token } }
  );

export const dislikePostHandlerService = async (postId, token) =>
  await axios.post(
    `/api/posts/dislike/${postId}`,
    {},
    { headers: { authorization: token } }
  );

export const createPostHandlerService = async (postData, token) =>
  await axios.post(
    "/api/posts",
    { postData },
    { headers: { authorization: token } }
  );

export const deletePostHandlerService = async (postId, token) =>
  await axios.delete(`/api/posts/${postId}`, {
    headers: { authorization: token },
  });

export const editPostHandlerService = async (postId, postData, token) =>
  await axios.post(
    `/api/posts/edit/${postId}`,
    { postData },
    { headers: { authorization: token } }
  );
