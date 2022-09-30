import React from "react";
import { useSelector } from "react-redux";
import './arrowDown.css';

const ArrowDown = ({ classNameProps, action }) => {

    const scrollData = useSelector(state => state.scrollData);

    const scrollToUp = () => {
        window.scrollTo(0, 0);
    };

    return (
        <svg className={classNameProps && `back_arrow-up ${scrollData < 400 ? "fadeOut" : "fadeIn"}`}
            onClick={action && scrollToUp}
            width="474.99988px"
            height="276px"
            viewBox="0 0 474.99988 276"
            version="1.1"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="474.9999" y2="0" id="gradient_1">
                    <stop offset="0%" stopColor="#FF0000" />
                    <stop offset="51.704544%" stopColor="#FF7700" />
                    <stop offset="100%" stopColor="#000000" />
                </linearGradient>
            </defs>
            <path d="M99.9999 0L238 159.204L384 0C384 0 406.254 0 427.004 0C447.754 0 475 0 475 0C475 0 325.134 168.625 265.884 235.292C206.634 301.958 238 266.666 238 266.666C238 266.666 264.813 296.708 205.313 230.042C145.813 163.375 0 0 0 0C0 0 30.993 0 55.993 0C80.993 0 99.9999 0 99.9999 0Z" id="Vector" fill="url(#gradient_1)" fillRule="evenodd" stroke="none" />
        </svg>
    );
};

export default ArrowDown;