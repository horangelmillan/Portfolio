import React, { useRef } from "react";
import { Link } from "react-router-dom";
import useCrossOutLink from "../../../hooks/useCrossOutLink";
import useNormalizePath from "./hooks/useNormalizePath";
import useNormalizeTranslate from "./hooks/useNormlizeTranslate";
import './links.css'

const Links = () => {
    
    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    const ref4 = useRef();

    useNormalizeTranslate();

    useNormalizePath();

    useCrossOutLink([ref1, ref2, ref3, ref4]);

    return (
        <ul className="Links">
            <Link ref={ref1} to={'/'}><span>HOME</span><div></div></Link>
            <Link ref={ref2} to={'/me'}><span>ABOUT</span><div></div></Link>
            <Link ref={ref3} to={'/projects'}><span>WORK</span><div></div></Link>
            <Link ref={ref4} to={'/contact'}><span>CONTACT</span><div></div></Link>
        </ul>
    );
};

export default Links;