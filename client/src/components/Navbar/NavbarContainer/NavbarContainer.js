import React from "react";
import NavbarLi from "../NavbarLi/NavbarLi";
import { NavLink } from "react-router-dom";

const NavbarContainer = () => {
    return (
        <nav className="NavbarContainer">
            <NavLink to="/">
                <h1>Google Books Search</h1>
            </NavLink>
            <ul>
                <NavbarLi name="Saved Books" link="/saved"/>
            </ul>
        </nav>
    )
};

export default NavbarContainer;