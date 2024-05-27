import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const Button = ({ text, link, className }) => {
  return (
    <Link to={link}>
      <button className={className}>{text}</button>
    </Link>
  );
};

export default Button;
