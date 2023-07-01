import { useState } from "react";
import { useAuth, usePost } from "../index";
import { postConstants } from "../constants/post-constants";

export const AddNewPost = ({ modalClass }) => {
  const [postContent, setPostContent] = useState("");
  const {
    currentUser: { profileAvatar },
  } = useAuth();
  const { createPostHandler, setPost } = usePost();
  const { SET_SHOW_ADD_NEW_POST_MODAL } = postConstants;

  const formSubmitHandler = (e) => {
    e.preventDefault();
    createPostHandler({ content: postContent });
    setPost({ type: SET_SHOW_ADD_NEW_POST_MODAL, payload: false });
    setPostContent("");
  };

  return (
    <div
      className={`flex w-full max-w-xl justify-between gap-3 rounded-lg bg-background p-5 md:mt-3 ${modalClass}`}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="h-10 w-10 rounded-full">
        <img src={profileAvatar} alt="profile" className="rounded-full" />
      </div>
      <form
        className="flex w-full flex-col justify-between gap-5"
        onSubmit={formSubmitHandler}
      >
        <textarea
          id="textarea"
          value={postContent}
          placeholder="What is happening?!"
          className="max-h-44 w-full grow resize-none rounded-lg p-2"
          onInput={(event) => {
            event.target.style.height = "auto";
            event.target.style.height = `${event.target.scrollHeight}px`;
          }}
          onChange={(e) => setPostContent(e.target.value)}
        />
        <button
          className={`w-fit self-end rounded-3xl bg-secondary px-5 py-2 font-bold uppercase tracking-widest hover:cursor-pointer ${
            postContent !== "" && "hover:bg-primary"
          }`}
          type="submit"
          disabled={postContent === ""}
          style={{ cursor: postContent === "" && "not-allowed" }}
        >
          Post
        </button>
      </form>
    </div>
  );
};
