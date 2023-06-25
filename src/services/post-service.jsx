import axios from "axios";

export const getAllPostsService = async () => await axios.get("/api/posts");
