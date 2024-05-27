import React from "react";
import Logo from "../Logo";
import Sign from "../SignLink";
import ProfileLink from "../ProfileLink";
import "./style.scss";

const MainNav = () => {
  return (
    <nav className="main-nav">
      <Logo width="200px" />
      <div className="main-nav-items">
        <ProfileLink />
        <Sign />
      </div>
    </nav>
  );
};

export default MainNav;
