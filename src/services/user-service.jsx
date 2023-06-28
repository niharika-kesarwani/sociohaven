import axios from "axios";

export const allUsersHandlerService = async () => await axios.get("/api/users");
