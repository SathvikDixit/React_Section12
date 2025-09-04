import React from "react";
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <nav className="p-5 flex justify-center gap-10">
        <Link to="/">Home</Link>
        <Link to="/user">User</Link>
        <Link to="/about">About</Link>
      </nav>
    </div>
  );
};

export default Nav;
