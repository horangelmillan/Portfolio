import React, { useRef, useImperativeHandle, forwardRef } from "react";
import './projects.css';


const Projects = forwardRef(({ props }, ref) => {

    const projectsRef = useRef();

    useImperativeHandle(ref, () => {
        return projectsRef.current;
    });

    return (
        <div className="Projects" ref={projectsRef}>
            <h1>Projects</h1>
        </div>
    )
});

export default Projects;