import { Navbar } from "./Navbar";
import { Header } from "./Header";
import { usePost, useUser } from "../index";
import { postConstants } from "../constants/post-constants";
import { AddNewPost } from "./AddNewPost";
import { userConstants } from "../constants/user-constants";
import { EditProfileForm } from "./EditProfileForm";

export const PageWrapper = ({ children }) => {
  const {
    post: { showAddNewPostModal },
    setPost,
  } = usePost();
  const {
    user: { showEditProfileModal },
    setUser,
  } = useUser();
  const { SET_SHOW_ADD_NEW_POST_MODAL, EDIT_POST } = postConstants;
  const {
    SET_SHOW_EDIT_PROFILE_MODAL,
    SET_SHOW_SEARCH_RESULTS,
    SET_SEARCH_INPUT,
  } = userConstants;

  return (
    <div
      className="flex h-screen w-full flex-col"
      onClick={() => {
        setUser({ type: SET_SHOW_SEARCH_RESULTS, payload: false });
        setUser({ type: SET_SEARCH_INPUT, payload: "" });
      }}
    >
      <Header />
      <div className="relative mx-auto flex h-[88%] w-full max-w-screen-xl grow flex-col md:flex-row 3xl:h-auto">
        <div className="h-full w-full md:order-1">{children}</div>
        <Navbar />
      </div>
      {showAddNewPostModal && (
        <div
          className="fixed inset-0 z-50 flex h-screen items-center justify-center bg-[black] bg-opacity-50"
          onClick={() => {
            setPost({ type: SET_SHOW_ADD_NEW_POST_MODAL, payload: false });
            setPost({ type: EDIT_POST, payload: null });
          }}
        >
          <AddNewPost modalClass="m-5" />
        </div>
      )}
      {showEditProfileModal && (
        <div
          className="fixed inset-0 z-50 flex h-screen items-center justify-center bg-[black] bg-opacity-50"
          onClick={() =>
            setUser({ type: SET_SHOW_EDIT_PROFILE_MODAL, payload: false })
          }
        >
          <EditProfileForm />
        </div>
      )}
    </div>
  );
};
