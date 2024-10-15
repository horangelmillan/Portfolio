import React, { useRef } from "react";
import useCrossOutLink from "./hooks/useCrossOutLink";
import useNavigateAction from "./hooks/useNavigateAction";
import useNormalizePath from "./hooks/useNormalizePath";
import useNormalizeTranslate from "./hooks/useNormlizeTranslate";
import useTogleBurguerMenu from "./hooks/useTogleBurguerMenu";
import './links.css';
import { useDispatch } from "react-redux";
import { setIsBurguerMenuOpen } from "../../../store/slices/isBurguerMenuOpen.slice";

const Links = ({ contentRef }) => {

    const dispatch = useDispatch();

    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    const ref4 = useRef();

    const refLinks = useRef();

    const navigateAction = useNavigateAction(contentRef);

    const navigationController = (link) => {
        dispatch(setIsBurguerMenuOpen());
        navigateAction(link);
    }
 
    useNormalizeTranslate();

    useNormalizePath();

    useTogleBurguerMenu(refLinks);
    useCrossOutLink([ref1, ref2, ref3, ref4]);

    return (
        <ul className="Links" ref={refLinks}>
            <button ref={ref1} data-link="/" onClick={() => navigationController('/')}><span>HOME</span><div></div></button>
            <button ref={ref2} data-link="/me" onClick={() => navigationController('/me')}><span>ABOUT</span><div></div></button>
            <button ref={ref3} data-link="/projects" onClick={() => navigationController('/projects')}><span>WORK</span><div></div></button>
            <button ref={ref4} data-link="/contact" onClick={() => navigationController('/contact')}><span>CONTACT</span><div></div></button>
        </ul>
    );
};

export default Links;