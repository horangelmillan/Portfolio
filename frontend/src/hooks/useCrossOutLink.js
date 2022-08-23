import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useCrossOutLink = (refs) => {

    const location = useLocation();

    useEffect(() => {
        refs.forEach(ref => {
            if (location.pathname === ref.current.getAttribute('href')) {
                ref.current.children[1].setAttribute('class', 'crossOut');
            } else {
                ref.current.children[1].setAttribute('class', 'crossIn');
            };
        });
    }, [location, refs]);

};

export default useCrossOutLink;