import { faCircleUser, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { logout } from "../../store/user/userSlice";
import "./style.scss";

const SignLink = () => {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  return (
    <div className="sign-in">
      {user !== "" ? (
        <Link
          to="/"
          className="sign-link-item"
          // Update Store & session
          onClick={() => dispatch(logout())}
        >
          <FontAwesomeIcon icon={faSignOut} />
          <p>Sign Out</p>
        </Link>
      ) : (
        <NavLink to="/login" className="sign-link-item">
          <FontAwesomeIcon icon={faCircleUser} />
          <p>Sign In</p>
        </NavLink>
      )}
    </div>
  );
};

export default SignLink;
