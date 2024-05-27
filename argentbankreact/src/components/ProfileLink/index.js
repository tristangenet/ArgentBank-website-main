import React from "react";
import { useSelector } from "react-redux";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import "./style.scss";

const ProfileLink = () => {
  const token = useSelector((state) => state.user.value.token);
  const userEmail = useSelector((state) => state.user.value.email);
  const userName = useSelector((state) => state.user.value.userName);

  return (
    <div className="profileLink">
      {token && (
        <NavLink to="/profile" className="profileLink-item">
          <FontAwesomeIcon icon={faCircleUser} />
          <p>{userName ? `${userName}` : userEmail}</p>
        </NavLink>
      )}
    </div>
  );
};

export default ProfileLink;
