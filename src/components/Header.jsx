import SearchIcon from "@mui/icons-material/Search";
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
        <div className="relative flex w-full max-w-sm px-3 md:w-auto lg:w-full">
          <label className="w-full">
            <input
              type="text"
              className="w-full rounded-full bg-background px-10 py-1.5 text-[black]"
              placeholder="Search here..."
            />
          </label>
          <div className="absolute left-0 top-1/2 -translate-y-1/2 translate-x-1/2 p-1.5 text-[gray]">
            <SearchIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
