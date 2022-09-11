import React, { useRef, useImperativeHandle, forwardRef } from 'react';
import './me.css';

const Me = forwardRef(({ props }, ref) => {

    const meRef = useRef();

    useImperativeHandle(ref, () => {
        return meRef.current;
    });

    return (
        <div className='Me' ref={meRef}>
            <h1>Me</h1>
        </div>
    );
});

export default Me;