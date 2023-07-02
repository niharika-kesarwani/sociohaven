import { Navbar } from "./Navbar";
import { Header } from "./Header";
import { usePost } from "../index";
import { postConstants } from "../constants/post-constants";
import { AddNewPost } from "./AddNewPost";

export const PageWrapper = ({ children }) => {
  const {
    post: { showAddNewPostModal },
    setPost,
  } = usePost();
  const { SET_SHOW_ADD_NEW_POST_MODAL, EDIT_POST } = postConstants;

  return (
    <div className="flex h-screen w-full flex-col">
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
    </div>
  );
};
