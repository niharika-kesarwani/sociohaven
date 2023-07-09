import axios from "axios";

export const loginAuthService = async (username, password) =>
  await axios.post("/api/auth/login", {
    username,
    password,
  });

export const signUpAuthService = async (
  username,
  password,
  firstName,
  lastName,
  profileAvatar,
  backgroundImage
) =>
  await axios.post("/api/auth/signup", {
    username,
    password,
    firstName,
    lastName,
    profileAvatar,
    backgroundImage,
  });
