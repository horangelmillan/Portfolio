import React from "react";
import Logo from "../SVG/Logo/Logo";
import Links from "./components/Links";
import useScrollNavbar from "./hooks/useScrollNavbar";
import './navbar.css';

const Navbar = ({ contentRef }) => {
    const { isShowNavbar } = useScrollNavbar();

    return (
        <div className={`Navbar ${isShowNavbar ? 'fadeIn' : 'fadeOut'}`}>
            <Logo size={"50px"} />
            <Links contentRef={contentRef} />
            <div className="border-bottom"></div>
        </div>
    );
};

export default Navbar;