import React from "react";
import {Link, NavLink} from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <nav className="p-5 flex justify-center gap-10">
        <NavLink 
            style={
                (e) => {
                    return{
                        color: e.isActive? "tomato" : "",
                    }
                }
            }
        to="/">Home</NavLink>
        <NavLink to="/user">User</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </div>
  );
};

export default Nav;
