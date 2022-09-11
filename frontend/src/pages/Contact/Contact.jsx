import React, { forwardRef, useImperativeHandle, useRef } from "react";
import './contact.css';

const Contact = forwardRef(({ props }, ref) => {

    const refContact = useRef();

    useImperativeHandle(ref, () => {
        return refContact.current;
    });

    return (
        <div ref={refContact}>
            <h1>Contact</h1>
        </div>
    );
});

export default Contact;