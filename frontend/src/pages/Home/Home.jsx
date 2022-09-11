import React, { forwardRef, useImperativeHandle, useRef } from "react";
import './home.css';

const Home = forwardRef(({ props }, ref) => {

    const refHome = useRef();

    useImperativeHandle(ref, () => {
        return refHome.current;
    });

    return (
        <div className="home" ref={refHome}>
            <section className="main">
                <div className="title">
                    <span>PORTFOLIO</span>
                    <h1>Full-Stack Web Development,<br />Design & Animation.</h1>
                    <span>By Horangel Millan</span>
                </div>
            </section>
        </div>
    )
});

export default Home;