import { createContext, useContext, useState } from "react";
import { loginAuthService } from "../services/auth-service";
import { signUpAuthService } from "../services/auth-service";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [showPassword, setShowPassword] = useState({
    login: false,
    signUp: false,
    signUpConfirm: false,
  });

  const localStorageToken = JSON.parse(localStorage.getItem("loginDetails"));

  const [token, setToken] = useState(localStorageToken?.token || "");
  const [currentUser, setCurrentUser] = useState(localStorageToken?.user);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleLoginPassword = () =>
    setShowPassword({ ...showPassword, login: !showPassword.login });

  const loginHandler = async ({ username, password }) => {
    try {
      const response = await loginAuthService(username, password);

      const {
        status,
        data: { foundUser, encodedToken },
      } = response;

      if (status === 200) {
        localStorage.setItem(
          "loginDetails",
          JSON.stringify({ user: foundUser, token: encodedToken })
        );
        setCurrentUser(foundUser);
        setToken(encodedToken);
        toast.success(`Successfully signed in as ${username}!`);
        navigate("/");
      }
    } catch (err) {
      const {
        response: { status },
      } = err;
      if (status === 401) {
        toast.error("Invalid password! Please try again!");
      } else if (status === 404) {
        toast.error("Credentials not found! Please signup before logging in!");
      } else {
        console.error(err);
        toast.error("Unable to sign in!");
      }
    }
  };

  const toggleSignUpPassword = () =>
    setShowPassword({ ...showPassword, signUp: !showPassword.signUp });

  const toggleSignUpConfirmPassword = () =>
    setShowPassword({
      ...showPassword,
      signUpConfirm: !showPassword.signUpConfirm,
    });

  const signUpHandler = async ({
    username,
    password,
    confirmPassword,
    firstName,
    lastName,
    profileAvatar,
    backgroundImage,
  }) => {
    if (password !== confirmPassword) {
      toast.error("Password fields are not matching!");
      navigate("/signup");
    } else {
      try {
        const response = await signUpAuthService(
          username,
          password,
          firstName,
          lastName,
          profileAvatar,
          backgroundImage
        );

        const {
          status,
          data: { encodedToken },
        } = response;

        if (status === 201) {
          localStorage.setItem(
            "loginDetails",
            JSON.stringify({ token: encodedToken })
          );
          setToken(encodedToken);
          toast.success(
            `Successfully signed up as ${username}! Kindly login to continue!`
          );
          navigate("/");
        }
      } catch (err) {
        const {
          response: { status },
        } = err;
        if (status === 422) {
          toast.error(
            "Username already exists! Please try signing up with another username!"
          );
        } else {
          console.error(err);
          toast.error("Unable to sign up!");
        }
      }
    }
  };

  const logoutHandler = () => {
    setToken(null);
    setCurrentUser(null);
    localStorage.removeItem("loginDetails");
    toast.success("Successfully logged out!");
    navigate(location?.state?.from?.pathname ?? "/");
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        currentUser,
        showPassword,
        setCurrentUser,
        toggleLoginPassword,
        loginHandler,
        toggleSignUpPassword,
        toggleSignUpConfirmPassword,
        signUpHandler,
        logoutHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
