import React from "react";
import NavbarLi from "../NavbarLi/NavbarLi";
import { NavLink } from "react-router-dom";

const NavbarContainer = () => {
    return (
        <nav className="NavbarContainer navbar navbar-light bg-light">
            <NavLink to="/">
                <h1 className="navbar-brand">Google Books Search</h1>
            </NavLink>
            <ul className="navbar-nav">
                <NavbarLi name="Saved Books" link="/saved"/>
            </ul>
        </nav>
    )
};

export default NavbarContainer;