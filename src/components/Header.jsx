import { NavLink } from "react-router-dom";
import favicon from "../assets/favicon.png";

export const Header = () => {
  return (
    <div className="sticky top-0 z-20 flex items-center justify-between bg-white p-3 shadow-xl md:px-5 md:py-4">
      <div className="mx-auto flex w-full max-w-screen-xl items-center justify-between gap-2 md:flex-row md:gap-3">
        <NavLink className="flex items-center gap-4" to="/">
          <img src={favicon} className="h-10 w-10 rounded-full" alt="logo" />
          <h1 className="hidden text-2xl font-bold uppercase tracking-widest text-primary hover:cursor-pointer md:block lg:text-4xl">
            Sociohaven
          </h1>
        </NavLink>
        <div className="flex w-full max-w-sm px-3 md:w-auto lg:w-full">
          <input
            type="text"
            className="w-full rounded-2xl border px-5 py-1"
            placeholder="Search here..."
          />
        </div>
      </div>
    </div>
  );
};
