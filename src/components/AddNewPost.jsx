import { useAuth } from "../index";

export const AddNewPost = () => {
  const {
    currentUser: { profileAvatar },
  } = useAuth();

  return (
    <div className="flex w-full flex-col justify-between gap-5 rounded-lg bg-background p-5 md:mt-10">
      <div className="flex w-full justify-between gap-5">
        <div className="h-10 w-10 overflow-hidden rounded-full">
          <img src={profileAvatar} alt="profile" className="h-full" />
        </div>
        <div className="grow">
          <textarea
            id="textarea"
            placeholder="Whats happening?"
            className="w-full resize-none rounded-lg p-2"
            onInput={(event) => {
              event.target.style.height = "auto";
              event.target.style.height = `${event.target.scrollHeight}px`;
            }}
          />
        </div>
      </div>
      <div className="flex justify-end">
        <div className="rounded-3xl bg-secondary px-5 py-2 font-bold uppercase tracking-widest hover:cursor-pointer hover:bg-primary">
          Post
        </div>
      </div>
    </div>
  );
};
