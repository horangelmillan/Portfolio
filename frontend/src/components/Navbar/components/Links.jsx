import React, { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { load } from '../../../store/slices/isRetract.slice';
import './links.css'

const Links = () => {

    const dispatch = useDispatch();

    const location = useLocation();

    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    const ref4 = useRef();

    useEffect(() => {
        const refs = [
            ref1,
            ref2,
            ref3,
            ref4
        ];

        refs.forEach(ref => {
            if (location.pathname === ref.current.getAttribute('href')) {
                ref.current.children[1].setAttribute('class', 'crossOut');
            } else {
                ref.current.children[1].setAttribute('class', 'crossIn');
            };
        })
    }, [location]);

    return (
        <ul className="Links">
            <Link ref={ref1} onClick={() => dispatch(load(66))} to={'/'}><span>HOME</span><div></div></Link>
            <Link ref={ref2} onClick={() => dispatch(load(3))} to={'/me'}><span>ABOUT</span><div></div></Link>
            <Link ref={ref3} onClick={() => dispatch(load(33))} to={'/projects'}><span>WORK</span><div></div></Link>
            <Link ref={ref4} onClick={() => dispatch(load(33))} to={'/contact'}><span>CONTACT</span><div></div></Link>
        </ul>
    )
};

export default Links;