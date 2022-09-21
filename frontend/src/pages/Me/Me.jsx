import React, { useRef, useImperativeHandle, forwardRef } from 'react';
import './me.css';

const Me = forwardRef(({ props }, ref) => {

    const meRef = useRef();

    useImperativeHandle(ref, () => {
        return meRef.current;
    });

    return (
        <div className='Me' ref={meRef}>
            <section className='main'>
                <h1>Me</h1>
            </section>
        </div>
    );
});

export default Me;