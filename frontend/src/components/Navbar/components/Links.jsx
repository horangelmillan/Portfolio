import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import useCrossOutLink from "../../../hooks/useCrossOutLink";
import useNormalizePath from "./hooks/useNormalizePath";
import useNormalizeTranslate from "./hooks/useNormlizeTranslate";
import './links.css';

const Links = () => {

    // useImperativeHandle and useContext

    const navigate = useNavigate();

    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    const ref4 = useRef();

    useNormalizeTranslate();

    useNormalizePath();

    useCrossOutLink([ref1, ref2, ref3, ref4]);

    return (
        <ul className="Links">
            <button ref={ref1} data-link="/" onClick={() => navigate('/')}><span>HOME</span><div></div></button>
            <button ref={ref2} data-link="/me" onClick={() => navigate('/me')}><span>ABOUT</span><div></div></button>
            <button ref={ref3} data-link="/projects" onClick={() => navigate('/projects')}><span>WORK</span><div></div></button>
            <button ref={ref4} data-link="/contact" onClick={() => navigate('/contact')}><span>CONTACT</span><div></div></button>
        </ul>
    );
};

export default Links;