import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import Button from "../../components/Button";
import { fetchEditProfile } from "../../services/fetchs/fetchProfile";
import { updateUserName } from "../../store/user/userSlice";
import UserInfos from "../UserInfos";
import "./style.scss";

const ProfileHeader = () => {
  const dispatch = useDispatch();

  const [userName, setUserName] = useState(
    useSelector((state) => state.user.value.userName)
  );
  const userToken = useSelector((state) => state.user.value.token);

  //FORM
  const [isEditing, setIsEditing] = useState(false);
  const form = useRef();
  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    if (userName.trim() !== "") {
      await fetchEditProfile(userName, userToken);
      setIsEditing(false);
      // UPDATE STORE & SESSION
      dispatch(updateUserName(userName));
      toast.success("Username updated correctly");
    } else {
      toast.error("Sorry, Can't use this User Name...");
    }
  };
  return (
    <div className="userHeader">
      {!isEditing && (
        <h1 className="userTitle">
          Welcome back
          <br />
        </h1>
      )}

      {isEditing ? (
        <form
          ref={form}
          onSubmit={(e) => {
            handleSubmitForm(e);
          }}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          className="editNameForm"
        >
          <UserInfos userName={userName} />
          <button type="submit" className="editNameFormBtn">
            Save
          </button>
          <button
            type="button"
            className="editNameFormBtn"
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </button>
        </form>
      ) : (
        <span className="userName">{userName}</span>
      )}
      {!isEditing && (
        <div onClick={handleEdit} className="EditBtnContainer">
          <Button text="Edit Name" className="edit-button" />
        </div>
      )}
    </div>
  );
};

export default ProfileHeader;
