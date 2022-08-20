import React, { useState, useEffect } from "react";
import Links from "./components/Links";
import logo from '../../images/logo.png';
import './navbar.css';

const Navbar = () => {

    const [scrollPosition, setScrollPosition] = useState(0);
    const [isShowNavbar, setIsShowNavbar] = useState(true);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if ((document.body.getBoundingClientRect()).top >= scrollPosition) {
                setIsShowNavbar(true);
            } else {
                setIsShowNavbar(false);
            };

            setScrollPosition((document.body.getBoundingClientRect()).top);
        });
    });

    return (
        <div className={`Navbar ${isShowNavbar ? 'fadeIn' : 'fadeOut'}`}>
            <img src={logo} alt="" />
            <Links />
            <div className="border-bottom"></div>
        </div>
    );
};

export default Navbar;