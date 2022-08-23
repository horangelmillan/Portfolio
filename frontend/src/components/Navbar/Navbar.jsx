import React from "react";
import Links from "./components/Links";
import useScrollNavbar from "../../hooks/useScrollNavbar";
import logo from '../../images/logo.png';
import './navbar.css';

const Navbar = () => {
    const { isShowNavbar } = useScrollNavbar();

    return (
        <div className={`Navbar ${isShowNavbar ? 'fadeIn' : 'fadeOut'}`}>
            <img src={logo} alt="Horangel Millan" />
            <Links />
            <div className="border-bottom"></div>
        </div>
    );
};

export default Navbar;