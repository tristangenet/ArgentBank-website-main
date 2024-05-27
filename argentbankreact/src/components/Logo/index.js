import React from "react";
import { NavLink } from "react-router-dom";

const Logo = ({ width }) => {
  return (
    <NavLink to="/" className="main-nav-logo">
      <img
        src="/images/argentBankLogo.webp"
        alt="argent Bank Logo"
        style={{ width: `${width}` }}
      />
    </NavLink>
  );
};

export default Logo;
