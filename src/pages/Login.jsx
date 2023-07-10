import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { useAuth } from "../index";
import { AuthImage } from "../components/AuthImage";
import { NavLink } from "react-router-dom";

export const Login = () => {
  const {
    showPassword: { login },
    toggleLoginPassword,
    loginHandler,
  } = useAuth();

  const [userLoginDetails, setUserLoginDetails] = useState({
    username: "",
    password: "",
  });

  const guestUserDetails = {
    username: "Niharika_twt",
    password: "Niharika_twt",
  };

  const handleInput = (e) =>
    setUserLoginDetails({
      ...userLoginDetails,
      [e.target.name]: e.target.value,
    });

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    loginHandler(userLoginDetails);
  };

  return (
    <div className="grid min-h-screen grid-cols-1 grid-rows-1 bg-background md:grid-cols-2">
      <div className="hidden h-screen md:block">
        <AuthImage />
      </div>
      <div className="flex items-center justify-center py-2">
        <div className="flex max-w-md flex-col gap-4">
          <h1 className="self-center text-4xl font-bold text-primary">
            SOCIOHAVEN
          </h1>
          <h1 className="self-center font-bold uppercase">Log In</h1>
          <form
            className="flex flex-col gap-4 rounded-lg bg-secondary bg-opacity-40 p-5"
            onSubmit={handleLoginSubmit}
          >
            <label htmlFor="username">Username*</label>
            <input
              autoComplete="on"
              className="rounded border border-primary px-2 py-1"
              id="username"
              name="username"
              onChange={handleInput}
              placeholder={`Eg: ${guestUserDetails.username}`}
              type="text"
            />
            <label htmlFor="password">Password*</label>
            <div className="relative flex">
              <input
                autoComplete="on"
                className="grow rounded border border-primary px-2 py-1"
                id="password"
                name="password"
                onChange={handleInput}
                placeholder={`Eg: ${guestUserDetails.password}`}
                type={login ? "text" : "password"}
              />
              <div
                className="absolute right-1 top-1 hover:cursor-pointer"
                onClick={() => toggleLoginPassword()}
              >
                {login ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </div>
            </div>
            <button
              type="submit"
              className="rounded border border-primary bg-secondary py-1 hover:bg-primary"
            >
              Log In
            </button>
            <button
              type="submit"
              className="rounded border border-primary bg-secondary py-1 hover:bg-primary"
              onClick={() => setUserLoginDetails(guestUserDetails)}
            >
              Login with Test Credentials
            </button>
            <div className="flex gap-5 self-center">
              <p>Don't have an account?</p>
              <NavLink
                to="/signup"
                className="hover:cursor-pointer hover:text-primary hover:underline"
              >
                <p>Signup</p>
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
