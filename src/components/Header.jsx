import SearchIcon from "@mui/icons-material/Search";
import CancelIcon from "@mui/icons-material/Cancel";
import { NavLink } from "react-router-dom";
import favicon from "../assets/favicon.png";
import { useUser } from "../index";
import { userConstants } from "../constants/user-constants";
import { useEffect } from "react";
import { SuggestedUserCard } from "./SuggestedUserCard";

export const Header = () => {
  const {
    user: { allUsers, showSearchResults, searchInput },
    setUser,
  } = useUser();
  const { SET_SEARCH_INPUT, SET_SHOW_SEARCH_RESULTS } = userConstants;

  const searchResultsUsers =
    searchInput === ""
      ? []
      : allUsers?.filter(
          ({ firstName, lastName, username }) =>
            firstName.toLowerCase().includes(searchInput.toLowerCase()) ||
            lastName.toLowerCase().includes(searchInput.toLowerCase()) ||
            username.toLowerCase().includes(searchInput.toLowerCase())
        );

  useEffect(() => {
    if (searchResultsUsers?.length === 0) {
      setUser({ type: SET_SHOW_SEARCH_RESULTS, payload: false });
    }
  }, [searchInput]);

  useEffect(() => {
    setUser({ type: SET_SHOW_SEARCH_RESULTS, payload: false });
    setUser({ type: SET_SEARCH_INPUT, payload: "" });
  }, []);

  return (
    <div className="sticky top-0 z-20 flex items-center justify-between bg-white p-3 shadow-xl md:px-5 md:py-4">
      <div className="mx-auto flex w-full max-w-screen-xl items-center justify-between gap-2 md:flex-row md:gap-3">
        <NavLink className="flex items-center gap-4" to="/">
          <img src={favicon} className="h-10 w-10 rounded-full" alt="logo" />
          <div className="hidden text-2xl font-bold uppercase tracking-widest text-primary hover:cursor-pointer md:block lg:text-4xl">
            Sociohaven
          </div>
        </NavLink>
        <div
          className="relative flex w-full max-w-sm px-3 md:w-auto lg:w-full"
          onClick={(e) => e.stopPropagation()}
        >
          <label className="w-full">
            <input
              type="text"
              className="w-full rounded-full bg-background px-10 py-1.5 text-[black]"
              placeholder="Search here..."
              value={searchInput}
              onChange={(e) => {
                setUser({ type: SET_SEARCH_INPUT, payload: e.target.value });
                setUser({ type: SET_SHOW_SEARCH_RESULTS, payload: true });
              }}
            />
          </label>
          <div className="absolute left-0 top-1/2 -translate-y-1/2 translate-x-1/2 p-1.5 text-[gray]">
            <SearchIcon />
          </div>
          {showSearchResults && (
            <div
              className="absolute right-0 top-1/2 -translate-x-1/2 -translate-y-1/2 p-1.5 text-primary hover:cursor-pointer"
              onClick={() => {
                setUser({ type: SET_SEARCH_INPUT, payload: "" });
                setUser({ type: SET_SHOW_SEARCH_RESULTS, payload: false });
              }}
            >
              <CancelIcon />
            </div>
          )}
          {showSearchResults && (
            <div className="absolute top-9 flex max-h-screen w-[95%] flex-col gap-2 overflow-y-auto rounded-lg bg-secondary p-2 md:gap-5 md:p-5">
              {searchResultsUsers?.map((user) => (
                <SuggestedUserCard user={user} searchResult key={user._id} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
