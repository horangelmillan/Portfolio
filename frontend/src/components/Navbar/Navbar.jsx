import React, { useEffect, useState } from "react";
import Links from "./components/Links";
import useScrollNavbar from "../../hooks/useScrollNavbar";
import logo from '../../images/logo.png';
import './navbar.css';

const Navbar = ({ contentRef }) => {
    const { isShowNavbar } = useScrollNavbar();

    /* --------------------------------------------------------------------------------- */
    /* Logica para scrollbar */

    const [screenWidth, setScreenWidth] = useState(null);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setScreenWidth(window.innerWidth);
            console.log(window.innerWidth);
        });

        return window.removeEventListener('resize', () => {
            setScreenWidth(window.innerWidth);
            console.log(window.innerWidth);
        });
    }, []);

    /* ------------------------------------------------------------------------------------ */

    return (
        <div className={`Navbar ${isShowNavbar ? 'fadeIn' : 'fadeOut'}`}>
            <img src={logo} alt="Horangel Millan" />
            <Links contentRef={contentRef} />
            <div className="border-bottom"></div>
        </div>
    );
};

export default Navbar;