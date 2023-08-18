import axios from "axios";

export const allUsersHandlerService = async () => await axios.get("/api/users");

export const allUsersBookmarksHandlerService = async (token) =>
  await axios.get("/api/users/bookmark", { headers: { authorization: token } });

export const addToBookmarksHandlerService = async (postId, token) =>
  await axios.post(
    `/api/users/bookmark/${postId}`,
    {},
    {
      headers: { authorization: token },
    }
  );

export const removeFromBookmarksHandlerService = async (postId, token) =>
  await axios.post(
    `/api/users/remove-bookmark/${postId}`,
    {},
    { headers: { authorization: token } }
  );

export const followUserHandlerService = async (followUserId, token) =>
  await axios.post(
    `/api/users/follow/${followUserId}`,
    {},
    { headers: { authorization: token } }
  );

export const unfollowUserHandlerService = async (followUserId, token) =>
  await axios.post(
    `/api/users/unfollow/${followUserId}`,
    {},
    { headers: { authorization: token } }
  );

export const getSingleUserHandlerService = async (username) =>
  await axios.get(`/api/users/${username}`);

export const editUserProfileService = async (userData, token) =>
  await axios.post(
    "/api/users/edit",
    { userData },
    { headers: { authorization: token } }
  );
