import React from "react";
import './Button.css';

const Button = ({ children, url }) => {
    return (
        <button className="Button">
            <span>{children}</span>
            <div></div>
        </button>
    );
};

export default Button;