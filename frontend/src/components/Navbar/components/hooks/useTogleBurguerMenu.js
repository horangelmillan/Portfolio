import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const useTogleBurguerMenu = (ref) => {

    const isBurguerMenuOpen = useSelector(state => state.isBurguerMenuOpen);
    const location = useLocation();

    useEffect(() => {
            if (isBurguerMenuOpen) {
                ref.current.setAttribute('class', 'Links show');
            } else {
                ref.current.setAttribute('class', 'Links hide');
            }
    }, [location, ref, isBurguerMenuOpen]);

};

export default useTogleBurguerMenu;