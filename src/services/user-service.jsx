import axios from "axios";

export const userHandlerService = async (userId) =>
  await axios.get(`/api/users/${userId}`);
