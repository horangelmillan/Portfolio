import React, { useRef } from "react";
import useCrossOutLink from "./hooks/useCrossOutLink";
import useNavigateAction from "./hooks/useNavigateAction";
import useNormalizePath from "./hooks/useNormalizePath";
import useNormalizeTranslate from "./hooks/useNormlizeTranslate";
import './links.css';

const Links = ({ contentRef }) => {

    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    const ref4 = useRef();

    const navigateAction = useNavigateAction(contentRef);

    useNormalizeTranslate();

    useNormalizePath();

    useCrossOutLink([ref1, ref2, ref3, ref4]);

    return (
        <ul className="Links">
            <button ref={ref1} data-link="/" onClick={() => navigateAction('/')}><span>HOME</span><div></div></button>
            <button ref={ref2} data-link="/me" onClick={() => navigateAction('/me')}><span>ABOUT</span><div></div></button>
            <button ref={ref3} data-link="/projects" onClick={() => navigateAction('/projects')}><span>WORK</span><div></div></button>
            <button ref={ref4} data-link="/contact" onClick={() => navigateAction('/contact')}><span>CONTACT</span><div></div></button>
        </ul>
    );
};

export default Links;