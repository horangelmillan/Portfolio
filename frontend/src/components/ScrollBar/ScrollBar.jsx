import React, { useState, useEffect, useRef } from "react";
import './scrollbar.css';

const ScrollBar = () => {

    const thundRef = useRef();
    const trackRef = useRef();

    const [isThundOver, setIsThundOver] = useState(false);
    const [isThundDown, setIsThundDown] = useState(false);
    const [thundPositionY, setThundPositionY] = useState();
    const [movePositionThund, setMovePositionThund] = useState();
    const [initThundPos, setInitThundPos] = useState();

    useEffect(() => {
        const {
            top: thundTop,
            height: thundHeight,
            width: thundWidth,
            left: thundLeft
        } = thundRef.current.getBoundingClientRect();

        const {
            top: trackTop,
            height: trackHeight,
            /* width: trackWidth,
            left: trackLeft */
        } = trackRef.current.getBoundingClientRect();

        if (!isThundOver && !isThundDown) {
            return
        };

        const moveAt = (e) => {
            document.body.onselectstart = () => {
                return false;
            };

            if (e.clientX >= thundLeft && e.clientX <= (thundLeft + thundWidth)) {
                if (thundTop > trackTop && thundTop + thundHeight < trackTop + trackHeight) {
                    let translate = e.clientY - thundPositionY + (initThundPos ? initThundPos - 15 : 0);

                    if (!isThundDown) {
                        return
                    };

                    setMovePositionThund(translate);
                } else {
                    if (thundTop < trackHeight / 2) {
                        setMovePositionThund(0)
                    } else if (thundTop > trackHeight / 2) {
                        setMovePositionThund(trackTop + trackHeight - (thundHeight * 2 + 20))
                    }
                };
            } else {
                return setIsThundDown(false, setInitThundPos(thundTop - thundHeight));
            };
        };

        document.addEventListener('mousemove', moveAt);
        return () => {
            document.removeEventListener('mousemove', moveAt);
            document.body.onselectstart = () => {
                return true;
            };
        };

    }, [thundRef, isThundDown, thundPositionY, isThundOver, movePositionThund, initThundPos]);

    return (
        <div className="ScrollBar" ref={trackRef}>
            <div className="thund" style={{ top: `${movePositionThund}px` }} ref={thundRef}
                onMouseOver={e => {
                    setIsThundOver(true);
                    setThundPositionY()
                }}
                onMouseOut={() => {
                    setIsThundOver(false);
                }}
                onMouseDown={e => {
                    setIsThundDown(true);
                    setThundPositionY(e.clientY);
                }}
                onMouseUp={e => {
                    setIsThundDown(false);
                    setInitThundPos(thundRef.current.getBoundingClientRect().top - thundRef.current.getBoundingClientRect().height);
                }}
            >

            </div>
        </div>
    );
};

export default ScrollBar;