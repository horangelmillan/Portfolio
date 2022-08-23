import { useEffect, useState } from "react";


const useScrollNavbar = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isShowNavbar, setIsShowNavbar] = useState(true);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if ((document.body.getBoundingClientRect()).top >= scrollPosition) {
                setIsShowNavbar(true);
            } else {
                setIsShowNavbar(false);
            };

            setScrollPosition((document.body.getBoundingClientRect()).top);
        });
    });

    return {isShowNavbar};
};

export default useScrollNavbar;