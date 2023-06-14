import loginImage from "../assets/login_pic.jpg";

export const Login = () => {
  return (
    <div className="bg-background min-h-screen flex items-center justify-center">
      <div className="h-screen w-1/2 hidden md:block">
        <img src={loginImage} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col md:w-1/2 gap-y-5 px-[5%]">
        <h1 className="self-center">SOCIOHAVEN</h1>
        <h1 className="self-center">Log In</h1>
        <label>Username*</label>
        <input className="px-2" />
        <label>Password*</label>
        <input className="px-2" type="password" />
        <button>Log In</button>
        <button>Guest Mode</button>
        <div className="self-center flex gap-x-5">
          <p>Don't have an account?</p>
          <button>Signup</button>
        </div>
      </div>
    </div>
  );
};
