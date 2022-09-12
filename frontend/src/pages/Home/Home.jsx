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

            <section className="introduction">
                <div className="hide_border-corner">
                    <div className="border-corner">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia delectus maiores aliquam? Id perferendis sunt repudiandae eius sit alias aliquid ullam ratione, optio tempore a culpa inventore corporis magni eligendi!
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
});

export default Home;