import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  const stylingShit = (e) => {
    return [
      e.isActive ? "text-red-400" : "",
      e.isActive ? "text-bold" : "",
    ].join(" ");
  };
  return (
    <div>
      <nav className="p-5 flex justify-center gap-10">
        <NavLink className={stylingShit} to="/">
          Home
        </NavLink>
        <NavLink className={stylingShit} to="/user">
          User
        </NavLink>
        <NavLink className={stylingShit} to="/about">
          About
        </NavLink>
      </nav>
    </div>
  );
};

export default Nav;
