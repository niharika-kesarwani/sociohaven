import loginImage from "../assets/login_pic.jpg";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { useAuth } from "../index";

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
    username: "sociohaven",
    password: "sociohaven123",
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
    <div className="bg-background min-h-screen flex items-center justify-center">
      <div className="h-screen w-1/2 hidden md:block">
        <img src={loginImage} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="md:w-1/2 px-[5%] flex items-center justify-center">
        <div className="max-w-md flex flex-col gap-y-5">
          <h1 className="text-4xl self-center text-primary font-bold">
            SOCIOHAVEN
          </h1>
          <h1 className="self-center">Log In</h1>
          <form className="flex flex-col gap-y-5" onSubmit={handleLoginSubmit}>
            <label htmlFor="username">Username*</label>
            <input
              autoComplete="on"
              className="px-2 py-1 border border-primary rounded"
              id="username"
              name="username"
              onChange={handleInput}
              placeholder={guestUserDetails.username}
              type="text"
            />
            <label htmlFor="password">Password*</label>
            <div className="flex relative">
              <input
                autoComplete="on"
                className="grow px-2 py-1 border border-primary rounded"
                id="password"
                name="password"
                onChange={handleInput}
                placeholder={guestUserDetails.password}
                type={login ? "text" : "password"}
              />
              <div
                className="absolute right-1 hover:cursor-pointer"
                onClick={() => toggleLoginPassword()}
              >
                {login ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </div>
            </div>
            <button
              type="submit"
              className="py-1 border bg-secondary border-primary rounded hover:bg-primary"
            >
              Log In
            </button>
            <button
              type="submit"
              className="py-1 border bg-secondary border-primary rounded hover:bg-primary"
              onClick={() => setUserLoginDetails(guestUserDetails)}
            >
              Login with Test Credentials
            </button>
            <button className="self-center flex gap-x-5 hover:text-primary">
              <p>Don't have an account?</p>
              <p>Signup</p>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
