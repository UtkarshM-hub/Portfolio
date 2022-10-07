import React from "react";
import { NavLink } from "react-router-dom";
import classes from "../CSS/NavBar.module.css";

const NavBar = () => {
  return (
    <div className={classes.NavBar}>
      <div className={classes.NavBar_inner}>
        <div className={classes.NavBar_Logo}>
          <p className={classes.NavBar_Text}>Utkarsh Mandape</p>
        </div>
        <ul className={classes.NavBar_List}>
          <NavLink
            exact
            activeClassName={classes.active}
            className={classes.NavBar_Items}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            exact
            activeClassName={classes.active}
            className={classes.NavBar_Items}
            to="/edu"
          >
            Education
          </NavLink>
          <NavLink
            exact
            activeClassName={classes.active}
            className={classes.NavBar_Items}
            to="/pro"
          >
            Projects
          </NavLink>
          <NavLink
            exact
            activeClassName={classes.active}
            className={classes.NavBar_Items}
            to="/cont"
          >
            Contact
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
