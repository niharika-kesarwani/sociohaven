import { AuthImage } from "../components/AuthImage";
import { useState } from "react";
import { useAuth } from "../index";
import { NavLink } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { defaultAvatar } from "../utils/avatarImages";

export const SignUp = () => {
  const {
    showPassword: { signUp, signUpConfirm },
    toggleSignUpPassword,
    toggleSignUpConfirmPassword,
    signUpHandler,
  } = useAuth();

  const [userSignUpDetails, setUserSignUpDetails] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    profileAvatar: defaultAvatar,
    backgroundImage: "",
  });

  const handleInput = (e) =>
    setUserSignUpDetails({
      ...userSignUpDetails,
      [e.target.name]: e.target.value,
    });

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    signUpHandler(userSignUpDetails);
  };

  return (
    <div className="grid min-h-screen grid-cols-1 grid-rows-1 bg-background md:grid-cols-2 lg:max-h-screen">
      <div className="hidden md:block">
        <AuthImage />
      </div>
      <div className="flex items-center justify-center py-5">
        <div className="flex max-w-md flex-col gap-5">
          <h1 className="text-4xl font-bold text-primary">SOCIOHAVEN</h1>
          <h1 className="font-bold uppercase">Sign Up</h1>
          <form
            className="flex flex-col gap-5 rounded-lg bg-secondary bg-opacity-40 p-5 text-start"
            onSubmit={handleSignUpSubmit}
          >
            <div className="flex flex-col gap-3 lg:flex-row">
              <div className="flex flex-col gap-3">
                <label htmlFor="firstName">First Name</label>
                <input
                  autoComplete="on"
                  className="w-full rounded border border-primary px-2 py-1"
                  id="firstName"
                  name="firstName"
                  onChange={handleInput}
                  placeholder="Eg: Akanksha"
                  required
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-3">
                <label htmlFor="lastName">Last Name</label>
                <input
                  autoComplete="on"
                  className="w-full rounded border border-primary px-2 py-1"
                  id="lastName"
                  name="lastName"
                  onChange={handleInput}
                  placeholder="Eg: Choudhary"
                  required
                  type="text"
                />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="username">Username</label>
              <input
                autoComplete="on"
                className="rounded border border-primary px-2 py-1"
                id="username"
                name="username"
                onChange={handleInput}
                placeholder="Eg: ch_akanksha"
                required
                type="text"
              />
            </div>
            <div className="flex flex-col gap-3 lg:flex-row">
              <div className="flex flex-col gap-3">
                <label htmlFor="password">Password</label>
                <div className="relative flex">
                  <input
                    autoComplete="on"
                    className="w-full rounded border border-primary px-2 py-1"
                    id="password"
                    name="password"
                    onChange={handleInput}
                    placeholder="Eg: ch_akanksha"
                    required
                    type={signUp ? "text" : "password"}
                  />
                  <div
                    className="absolute right-0 top-1/2 -translate-x-1/2 -translate-y-1/2 hover:cursor-pointer"
                    onClick={() => toggleSignUpPassword()}
                  >
                    {signUp ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <div className="relative flex">
                  <input
                    autoComplete="on"
                    className="w-full rounded border border-primary px-2 py-1"
                    id="confirmPassword"
                    name="confirmPassword"
                    onChange={handleInput}
                    placeholder="Eg: ch_akanksha"
                    required
                    type={signUpConfirm ? "text" : "password"}
                  />
                  <div
                    className="absolute right-0 top-1/2 -translate-x-1/2 -translate-y-1/2 hover:cursor-pointer"
                    onClick={() => toggleSignUpConfirmPassword()}
                  >
                    {signUpConfirm ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2">
              <input
                type="checkbox"
                className="hover:cursor-pointer"
                name="signUp_label_accept"
                required
              />
              <div>I accept terms and conditions</div>
            </div>
            <button
              type="submit"
              className="rounded border border-primary bg-secondary py-1 hover:bg-primary"
            >
              <div>Sign Up</div>
            </button>

            <button className="flex gap-5 self-center">
              <div>Already have an account?</div>
              <NavLink
                to="/login"
                className="flex hover:cursor-pointer hover:text-primary hover:underline"
              >
                <div>Login</div>
                <ChevronRightIcon />
              </NavLink>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
