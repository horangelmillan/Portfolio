import React, { forwardRef, useImperativeHandle, useRef } from "react";
import Button from "../../components/Button/Button";
import ArrowDown from "../../components/SVG/ArrowDown/ArrowDown";
import LeaveParticles from "../../components/Autumn_Leaves/LeavesParticles";
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

                <a href="#aboutMe"><ArrowDown href="#aboutMe" /></a>
            </section>

            <section className="introduction" id="aboutMe">
                <span>Yo</span>

                <p>
                    Hola. Soy Horangel Millan, un creativo desarrollador web Full-Stack, creo, diseño
                    y desarrollo para darle valor a tu producto.
                </p>

                <Button>
                    MAS SOBRE MÍ
                </Button>

            </section>

            <section>

                <LeaveParticles lot={20} elementActive={true} LeaveRef={'homeRef'}/>

            </section>
        </div>
    );
});

export default Home;