import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { throttle } from "lodash";

const useScrollNavbar = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isShowNavbar, setIsShowNavbar] = useState(true);
    const scrollData = useSelector(state => state.scrollData);

    useEffect(() => {
        // Función que se ejecutará durante el scroll (limitada por throttle)
        const switchShowNavbar = throttle(() => {
            if (scrollData <= scrollPosition) {
                setIsShowNavbar(true);
            } else {
                setIsShowNavbar(false);
            };

            setScrollPosition(scrollData);
        }, 500); // Limitar la frecuencia de ejecución a una vez cada 200ms

        window.addEventListener('scroll', switchShowNavbar);

        return () => {
            window.removeEventListener('scroll', switchShowNavbar);
        };
    });

    return { isShowNavbar };
};

export default useScrollNavbar;
