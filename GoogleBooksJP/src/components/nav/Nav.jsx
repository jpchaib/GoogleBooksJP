import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Nav.module.scss";

const Nav = () => {
    return (
        <nav className={style.Bar}>
            <NavLink className={style.Link} to="/">
                Home
            </NavLink>
            <NavLink className={style.Link} to="/library/">
                Library
            </NavLink>
        </nav>
    );
};

export default Nav;
