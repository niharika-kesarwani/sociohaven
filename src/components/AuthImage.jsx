import { loginImage } from "../utils/avatarImages";

export const AuthImage = () => {
  return <img src={loginImage} alt="" className="h-full w-full object-cover" />;
};
