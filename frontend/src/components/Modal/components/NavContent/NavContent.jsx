import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setModalContent } from '../../../../store/slices/modalContent.slice'
import './NavContent.css';

const NavContent = () => {

    const dispatch = useDispatch();

    const content = useSelector(state => state.modalContent);

    const navContentRef = useRef();

    const [styles, setStyles] = useState();

    const navigateToContent = contentTitle => {
        dispatch(setModalContent(contentTitle));
    };

    useEffect(() => {

        for (const child of navContentRef.current.children) {
            if (child.children[0].innerHTML === content) {

                child.insertAdjacentHTML('beforeEnd', `
                <div style='position: absolute; z-index: -1; animation: translateTo 1s;'>
                    <svg
                    style='animation: fadeInRotate 1s;'
                    width='50px'
                    height='50px'
                    viewBox="0 0 453.331 527.5"
                    xmlns="http://www.w3.org/2000/svg">
                        <path
                            style='animation: fadeIn 1s'
                            d="M217.127 16.2c-11.4 18.9-15.4 24.5-24.4 34.1-11.5 12.2-24.3 19.3-36.8 20.5-3.6.3-6.7 1-7.1 1.6-.3.5-.9 11.1-1.4 23.6-1.4 37.3-3.1 49.2-8.5 61-2.6 5.8-8.9 14.1-10.6 14.1-.5 0-2.9-1.7-5.3-3.8-2.4-2-10.1-7.3-17.1-11.7-14.5-8.9-23.8-17.5-27.8-25.3-1.4-2.8-2.8-5.2-3.1-5.2-.2 0-2.5 3.6-5 8l-4.6 7.9-5.2-4.2c-9.5-7.7-19.2-10.7-35.1-10.7h-9.2l4.8 9.6c4.6 9.5 8 21.3 9.2 32.4.4 3 1.1 15.2 1.6 27 .6 11.8 1.2 22.4 1.3 23.4.2 1.6-1.3 2.3-9 4.5-5.1 1.4-9.3 2.8-9.3 3.1 0 1.8 30.1 30.1 38 35.8l9.5 6.8.7 5.5c.3 3 .6 9.5.7 14.6l.1 9.1-4.7 4.3c-8.4 7.4-21.2 15-39.7 23.7-10 4.6-18.5 8.8-19 9.2-.5.6.5.7 2.5.5 10.7-1.4 39.7-2.5 41.9-1.7 1.4.5 7.4 2 13.5 3.1 13.4 2.7 19.9 5.7 26.9 12.5 5.8 5.6 8 6.6 35.6 16.8l11.5 4.3.8 13c.4 7.1 1 13.1 1.3 13.4 1 1 16-2.1 26.6-5.5 14.6-4.7 30.5-11.5 50.1-21.3l15.7-7.9v3.3c0 1.8-.5 7.9-1.1 13.6-3.6 35.6-16.3 73.1-35.9 106.3-5.7 9.7-18.2 26.5-22.9 31-3.9 3.7-3.9 4.4.1 4.8 2.8.2 3.4.8 3.8 3.2l.5 3 5.8-6.5c17.3-18.9 34.7-52.8 44.2-86 5.8-20.1 10.5-49.6 10.5-66v-5.7l10.9 5.8c25.5 13.7 51.6 24.1 68.2 27.1 9.3 1.7 9.9 1.3 9.9-6.3 0-3.5.3-9.3.6-13 .7-6.7.7-6.8 4.3-7.9 7.2-2.4 32.3-11.9 35.4-13.5 1.8-.9 5.5-3.8 8.3-6.4 6.1-5.8 11.1-8.5 19.5-10.4 26.3-6 23.7-5.8 44.9-4.3 10.7.7 19.7 1.2 19.8 1.1.2-.1-8.9-4.8-20.2-10.3-22.7-11-31.7-16.5-38.9-23.8l-4.7-4.9.6-13.1c.4-7.3 1-13.6 1.3-14.1.3-.5 4.2-3.5 8.6-6.7 7.1-5.1 38.5-35 38.5-36.6 0-.3-3.9-1.7-8.7-2.9-4.9-1.3-8.9-2.4-9-2.5-.1 0 .4-12.2 1.2-27 1.9-35.4 3.5-43.8 11.6-59.9l4-7.9-12.8.5c-15.2.6-21.2 2.5-30.7 9.7l-6.3 4.8-4.4-7.9c-2.4-4.3-4.6-7.8-4.9-7.8-.3 0-1.8 2.5-3.4 5.5-3.9 7.5-13.9 16.6-27.7 25-6.3 3.8-13.8 9-16.8 11.3l-5.3 4.4-3.5-3.4c-1.9-1.8-5-6.5-6.9-10.3-5.4-10.9-7.2-22.1-8.4-51-.5-13.8-1.2-27.4-1.6-30.3l-.5-5.2h-4.2c-9.7 0-22-5.3-32.2-13.7-11-9-20.6-21.8-34.9-46.6l-6.3-10.8-9.7 16.2Z"
                            fill-rule="evenodd"
                            fill='orange'
                        />
                    </svg>
                </div>
                `);

            } else {
                if (child.children[1]) {
                    child.children[1].style.animation = 'fadeOut 1s'
                    setTimeout(() => {
                        child.removeChild(child.children[1]);
                    }, 1000);
                };
            };
        };

        content !== 'Login' ? setStyles({
            navContent: {
                width: '16%',
                marginRight: '0.5rem'
            }
        }) : setStyles({
            navContent: {
                width: '',
                marginRight: ''
            }
        });

    }, [content]);

    return (
        <div className='NavContent' ref={navContentRef} style={styles?.navContent} >
            <div className='title_content' onClick={e => navigateToContent(e.target.innerHTML)}><p>Profile</p></div>
            <div className='title_content' onClick={e => navigateToContent(e.target.innerHTML)}><p>Management</p></div>
            <div className='title_content' onClick={e => navigateToContent(e.target.innerHTML)}><p>Contacts</p></div>
            <div className='title_content' onClick={e => navigateToContent(e.target.innerHTML)}><p>Log Out</p></div>
        </div>
    );
}

export default NavContent;