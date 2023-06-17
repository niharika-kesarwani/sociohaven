import axios from "axios";

export const loginAuthService = async (username, password) =>
  await axios.post("/api/auth/login", {
    username: username,
    password: password,
  });

export const signUpAuthService = async (
  username,
  password,
  firstName,
  lastName
) =>
  await axios.post("/api/auth/signup", {
    username: username,
    password: password,
    firstName: firstName,
    lastName: lastName,
  });
