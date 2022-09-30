import { useEffect, useState } from "react";
import { useSelector } from "react-redux";


const useScrollNavbar = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isShowNavbar, setIsShowNavbar] = useState(true);
    const scrollData = useSelector(state => state.scrollData);

    useEffect(() => {
        const switchShowNavbar = () => {
            if (scrollData <= scrollPosition) {
                setIsShowNavbar(true);
            } else {
                setIsShowNavbar(false);
            };

            setScrollPosition(scrollData);
        };

        window.addEventListener('scroll', switchShowNavbar);

        return () => {
            window.removeEventListener('scroll', switchShowNavbar);
        };
    });

    return { isShowNavbar };
};

export default useScrollNavbar;