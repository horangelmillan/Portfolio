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
                <span>Yo</span>

                <p>
                    Hola. Soy Horangel Millan, un creativo desarrollador web Full-Stack,
                    apasionado por el diseño interactivo y la tecnologia, busco profecionalizarme
                    en las distintas areas de la programacion.
                </p>

                    <button><span>MAS SOBRE MÍ</span><div></div></button>
            </section>

            <section>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, veritatis laboriosam assumenda commodi vitae adipisci incidunt quae maiores nisi dignissimos libero eum suscipit fugiat aspernatur obcaecati quia magni, nam eius voluptatum dolorem, totam saepe. Nobis possimus nesciunt harum repudiandae, similique cupiditate ducimus provident consequuntur atque officia nihil facilis ab aliquam.</p>
            </section>
        </div>
    );
});

export default Home;