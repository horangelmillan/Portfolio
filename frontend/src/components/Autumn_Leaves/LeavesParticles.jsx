import React, { useEffect, useRef, useState } from "react";
import Leaves from "../SVG/AutumnLeaves/AutumnLeaves";
import useActiveWithScroll from "./hooks/useActiveWithScroll";
import './LeaveParticles.css';

const LeaveParticles = ({ lot, scrollActive, modalActive, LeaveRef }) => {

    const [LeaveParticles, setLeaveParticles] = useState([]);

    LeaveRef = useRef();

    const { active } = useActiveWithScroll(LeaveRef);

    useEffect(() => {

        LeaveRef.current.innerHTML = '';

        const colors = ["#E7C5B1", "#C98025", "#C64B0D", "#A62522", "5A0609", "#9E2835", "#6B1B24", "#EB818D", "#AE6069"];

        const addAnimation = () => {
            return `moveLeave${Math.floor(Math.random() * 2)} ${Math.random() * (10 - 2) + 2}s linear infinite`;
        };

        const selectLeave = () => {
            return Math.floor(Math.random() * 3);
        };

        const addPosition = () => {
            const heigthCanva = LeaveRef.current.getBoundingClientRect().height > 0 ? LeaveRef.current.getBoundingClientRect().height : 700;

            return Math.floor(Math.random() * heigthCanva);
        };

        const addSize = () => {
            return Math.floor(Math.random() * (50 - 30) + 30);
        };

        const addColor = () => {
            return colors[Math.floor(Math.random() * colors.length)];
        };

        const addKey = () => {
            let id = '';

            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

            for (let i = 0; i < characters.length; i++) {
                id += characters.charAt(Math.floor(Math.random() * characters.length));
            };

            return id;
        };

        const GenerateLeaveRandom = () => {
            for (let i = 0; i < lot; i++) {
                LeaveParticles.push(
                    Leaves(selectLeave(), addColor(), addKey(), addSize(), addPosition(), addAnimation())
                );
            };
            setLeaveParticles(LeaveParticles);
        };

        scrollActive ? (active && GenerateLeaveRandom()) : (modalActive && GenerateLeaveRandom())

    }, [LeaveParticles, lot, setLeaveParticles, active, LeaveRef, scrollActive, modalActive]);



    return (
        <div className="Particles" ref={LeaveRef}>
            {LeaveParticles}
        </div>
    );
};

export default LeaveParticles;