import { AuthImage } from "../components/AuthImage";
import { useState } from "react";
import { useAuth } from "../index";
import { NavLink } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

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
    <div className="grid min-h-screen grid-cols-1 grid-rows-1 bg-background md:grid-cols-2">
      <div className="hidden md:block">
        <AuthImage />
      </div>
      <div className="flex items-center justify-center px-[5%] py-5">
        <div className="flex max-w-md flex-col gap-y-5">
          <h1 className="self-center text-4xl font-bold text-primary">
            SOCIOHAVEN
          </h1>
          <h1 className="self-center">Sign Up</h1>
          <form className="flex flex-col gap-y-5" onSubmit={handleSignUpSubmit}>
            <div className="flex flex-col gap-y-3">
              <label htmlFor="firstName">First Name</label>
              <input
                autoComplete="on"
                className="rounded border border-primary px-2 py-0.5"
                id="firstName"
                name="firstName"
                onChange={handleInput}
                placeholder="Eg: Akanksha"
                required
                type="text"
              />
            </div>
            <div className="flex flex-col gap-y-3">
              <label htmlFor="lastName">Last Name</label>
              <input
                autoComplete="on"
                className="rounded border  border-primary px-2 py-0.5"
                id="lastName"
                name="lastName"
                onChange={handleInput}
                placeholder="Eg: Choudhary"
                required
                type="text"
              />
            </div>
            <div className="flex flex-col gap-y-3">
              <label htmlFor="username">Username</label>
              <input
                autoComplete="on"
                className="rounded border border-primary px-2 py-0.5"
                id="username"
                name="username"
                onChange={handleInput}
                placeholder="Eg: ch_akanksha"
                required
                type="text"
              />
            </div>
            <div className="flex flex-col gap-y-3">
              <label htmlFor="password">Password</label>
              <div className="relative flex">
                <input
                  autoComplete="on"
                  className="grow rounded border border-primary px-2 py-0.5"
                  id="password"
                  name="password"
                  onChange={handleInput}
                  placeholder="Eg: ch_akanksha"
                  required
                  type={signUp ? "text" : "password"}
                />
                <div
                  className="absolute right-1 top-0.5 hover:cursor-pointer"
                  onClick={() => toggleSignUpPassword()}
                >
                  {signUp ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-y-3">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <div className="relative flex">
                <input
                  autoComplete="on"
                  className="grow rounded  border border-primary px-2 py-0.5"
                  id="confirmPassword"
                  name="confirmPassword"
                  onChange={handleInput}
                  placeholder="Eg: ch_akanksha"
                  required
                  type={signUpConfirm ? "text" : "password"}
                />
                <div
                  className="absolute right-1 top-0.5 hover:cursor-pointer"
                  onClick={() => toggleSignUpConfirmPassword()}
                >
                  {signUpConfirm ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-x-2">
              <input
                type="checkbox"
                className="hover:cursor-pointer"
                name="signUp_label_accept"
                required
              />
              <h3>I accept terms and conditions</h3>
            </div>
            <button
              type="submit"
              className="rounded border border-primary bg-secondary py-1 hover:bg-primary"
            >
              <h3>Sign Up</h3>
            </button>
            <NavLink to="/login">
              <button className="flex gap-x-5 self-center hover:text-primary">
                <h3>Already have an account? Login</h3>
                <ChevronRightIcon />
              </button>
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
};
