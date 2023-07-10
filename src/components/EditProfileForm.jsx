import { useAuth, useUser } from "../index";
import { userConstants } from "../constants/user-constants";
import { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { avatarImages } from "../utils/avatarImages";

export const EditProfileForm = () => {
  const { currentUser } = useAuth();
  const {
    user: { allUsers, showAvatarModal },
    setUser,
    editUserProfile,
  } = useUser();
  const [formDetails, setFormDetails] = useState({});
  const { SET_SHOW_EDIT_PROFILE_MODAL, SET_SHOW_AVATAR_MODAL } = userConstants;

  const updatedCurrentUser = allUsers?.find(
    ({ username }) => username === currentUser?.username
  );

  const {
    _id,
    firstName,
    lastName,
    username,
    password,
    bio,
    website,
    profileAvatar,
    backgroundImage,
    createdAt,
    updatedAt,
    following,
    followers,
    bookmarks,
  } = formDetails;

  const formSubmitHandler = (e) => {
    e.preventDefault();
    editUserProfile(formDetails);
    setUser({ type: SET_SHOW_EDIT_PROFILE_MODAL, payload: false });
  };

  const formHandler = (e) =>
    setFormDetails({
      ...formDetails,
      [e.currentTarget.name]: e.currentTarget.value,
    });

  useEffect(() => {
    setFormDetails(updatedCurrentUser);
  }, []);

  return (
    <div
      className="mx-2 w-full max-w-xl rounded-lg bg-background py-3 text-xs lg:text-base"
      onClick={(e) => e.stopPropagation()}
    >
      <form
        onSubmit={formSubmitHandler}
        className="flex flex-col justify-between gap-2"
      >
        <div className="flex w-full items-center gap-5 px-3">
          <div
            className="rounded-full p-2 hover:cursor-pointer hover:bg-secondary"
            onClick={() =>
              setUser({ type: SET_SHOW_EDIT_PROFILE_MODAL, payload: false })
            }
          >
            <CloseIcon />
          </div>
          <div className="grow text-start font-bold">Edit profile</div>
          <button
            className="rounded-full border bg-secondary px-4 py-2 hover:cursor-pointer hover:bg-primary md:px-6"
            type="submit"
          >
            Save
          </button>
        </div>

        <div className="relative">
          {backgroundImage !== "" ? (
            <img
              className="max-h-24 w-full object-cover opacity-75 lg:max-h-48"
              src={backgroundImage}
              alt="background_img"
            />
          ) : (
            <div className="h-24 w-full bg-[gray] bg-opacity-60 lg:h-48"></div>
          )}
          <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 gap-5 text-white">
            <label>
              <div
                className="flex rounded-full bg-[gray] p-3 hover:cursor-pointer hover:bg-opacity-90"
                title="Add photo"
              >
                <input
                  className="hidden hover:cursor-pointer"
                  accept="image/*"
                  type="file"
                  name="backgroundImage"
                  onChange={(e) =>
                    setFormDetails({
                      ...formDetails,
                      backgroundImage: URL.createObjectURL(e.target.files[0]),
                    })
                  }
                />
                <AddAPhotoIcon />
              </div>
            </label>
            {backgroundImage !== "" && (
              <button
                className="rounded-full bg-[gray] p-3 hover:cursor-pointer hover:bg-opacity-90"
                name="backgroundImage"
                value=""
                title="Remove photo"
                onClick={(e) => {
                  e.preventDefault();
                  formHandler(e);
                }}
              >
                <CloseIcon />
              </button>
            )}
          </div>
          <div>
            <img
              className="absolute -bottom-10 left-2 h-20 w-20 rounded-full border-4 border-white object-cover lg:-bottom-12 lg:left-5 lg:h-32 lg:w-32"
              src={profileAvatar}
              alt="profile_image"
            />
            <label className="absolute -bottom-5 left-7 text-white lg:-bottom-2 lg:left-[3.75rem]">
              <div
                className="flex rounded-full bg-[gray] p-2 hover:cursor-pointer hover:bg-opacity-90 lg:p-3"
                title="Add photo"
              >
                <input
                  className="hidden hover:cursor-pointer"
                  accept="image/*"
                  type="file"
                  name="profileAvatar"
                  onChange={(e) =>
                    setFormDetails({
                      ...formDetails,
                      profileAvatar: URL.createObjectURL(e.target.files[0]),
                    })
                  }
                />
                <AddAPhotoIcon />
              </div>
            </label>
          </div>
          <div>
            <img
              className="absolute -bottom-10 right-2 h-20 w-20 rounded-full border-4 border-white object-cover lg:-bottom-12 lg:right-5 lg:h-32 lg:w-32"
              src={profileAvatar}
              alt="profile_image"
            />
            <label
              className="absolute -bottom-5 right-7 text-white lg:-bottom-2 lg:right-[3.75rem]"
              onClick={() =>
                setUser({ type: SET_SHOW_AVATAR_MODAL, payload: true })
              }
              title="Add Avatar"
            >
              <div className="flex rounded-full bg-[gray] p-2 hover:cursor-pointer hover:bg-opacity-90 lg:p-3">
                <PersonAddIcon />
              </div>
            </label>
          </div>
        </div>

        <div className="flex flex-col gap-3 px-4 py-4 pt-12 text-left">
          <div className="flex flex-col justify-between gap-3 sm:flex-row">
            <div className="flex grow flex-col gap-2">
              <label>First Name *</label>
              <input
                type="text"
                className="rounded-full border px-2 py-1"
                defaultValue={firstName}
                name="firstName"
                onChange={(e) => formHandler(e)}
                required
              />
            </div>
            <div className="flex grow flex-col gap-2">
              <label>Last Name *</label>
              <input
                type="text"
                className="rounded-full border px-2 py-1"
                defaultValue={lastName}
                name="lastName"
                onChange={(e) => formHandler(e)}
                required
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label>Bio</label>
            <input
              type="text"
              className="rounded-full border px-2 py-1"
              defaultValue={bio}
              name="bio"
              onChange={(e) => formHandler(e)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Website</label>
            <input
              type="url"
              className="rounded-full border px-2 py-1"
              defaultValue={website}
              name="website"
              onChange={(e) => formHandler(e)}
            />
          </div>
        </div>

        {showAvatarModal && (
          <div
            className="fixed inset-0 z-50 flex h-screen items-center justify-center bg-[black] bg-opacity-50"
            onClick={() =>
              setUser({ type: SET_SHOW_AVATAR_MODAL, payload: false })
            }
          >
            <div
              className="mx-2 flex w-full max-w-xs flex-col gap-5 rounded-lg bg-background px-3 py-4 text-xs lg:text-base"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex w-full items-center gap-5">
                <div
                  className="rounded-full p-2 hover:cursor-pointer hover:bg-secondary"
                  onClick={() =>
                    setUser({ type: SET_SHOW_AVATAR_MODAL, payload: false })
                  }
                >
                  <CloseIcon />
                </div>
                <div className="grow text-start font-bold">
                  Choose Your Avatar
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-5">
                {avatarImages?.map((avatar) => (
                  <div
                    className="h-20 w-20 rounded-full bg-[gray] bg-opacity-50 hover:cursor-pointer hover:opacity-90"
                    onClick={() => {
                      setFormDetails({
                        ...formDetails,
                        profileAvatar: avatar,
                      });
                      setUser({ type: SET_SHOW_AVATAR_MODAL, payload: false });
                    }}
                  >
                    <img src={avatar} className="rounded-full" alt={avatar} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};
