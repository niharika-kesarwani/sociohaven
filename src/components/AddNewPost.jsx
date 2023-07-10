import { useEffect, useState } from "react";
import { useAuth, usePost } from "../index";
import { postConstants } from "../constants/post-constants";
import { useNavigate } from "react-router-dom";

export const AddNewPost = ({ modalClass }) => {
  const [postContent, setPostContent] = useState("");
  const {
    currentUser: { username, profileAvatar },
  } = useAuth();
  const {
    post: { toEditPost },
    setPost,
    createPostHandler,
    editPostHandler,
  } = usePost();
  const navigate = useNavigate();
  const { SET_SHOW_ADD_NEW_POST_MODAL, EDIT_POST } = postConstants;

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (toEditPost) {
      editPostHandler(toEditPost?._id, { content: postContent });
    } else {
      createPostHandler({ content: postContent });
    }
    setPost({ type: SET_SHOW_ADD_NEW_POST_MODAL, payload: false });
    setPost({ type: EDIT_POST, payload: null });
    setPostContent("");
  };

  useEffect(() => {
    if (toEditPost) {
      setPostContent(toEditPost.content);
    }
  }, []);

  return (
    <div
      className={`flex w-full max-w-xl justify-between gap-3 rounded-lg bg-background p-3 text-xs md:mt-3 md:p-5 md:text-base ${modalClass}`}
      onClick={(e) => e.stopPropagation()}
    >
      <div
        className="h-10 w-10 rounded-full hover:cursor-pointer"
        onClick={() => navigate(`/profile/${username}`)}
      >
        <img
          src={profileAvatar}
          alt="profile"
          className="h-10 w-10 max-w-none rounded-full object-cover"
        />
      </div>
      <form
        className="flex w-full flex-col justify-between gap-5"
        onSubmit={formSubmitHandler}
      >
        <textarea
          id="textarea"
          value={postContent}
          placeholder={`What is happening?!${"\n"}(Use Win + . or ⌘ + ^ + space for emojis)`}
          className="h-24 max-h-44 w-full grow resize-none rounded-lg p-2"
          onInput={(event) => {
            event.target.style.height = "96px";
            event.target.style.height = `${event.target.scrollHeight}px`;
          }}
          onChange={(e) => setPostContent(e.target.value)}
        />
        <button
          className={`w-fit self-end rounded-3xl bg-secondary px-5 py-2 font-bold tracking-widest hover:cursor-pointer hover:text-white ${
            postContent !== "" && "hover:bg-primary"
          }`}
          type="submit"
          disabled={postContent.trim() === ""}
          style={{ cursor: postContent.trim() === "" && "not-allowed" }}
        >
          {toEditPost ? "Update" : "Post"}
        </button>
      </form>
    </div>
  );
};
