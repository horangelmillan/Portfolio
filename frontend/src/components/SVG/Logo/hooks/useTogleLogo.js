import { useEffect } from "react";
import { useSelector } from "react-redux";

const useTogleLogo = (refs) => {
    const isBurguerMenuOpen = useSelector(state => state.isBurguerMenuOpen);

    // Función para obtener el valor de la variable CSS
    const isSmallScreen = () => {
        return getComputedStyle(document.documentElement)
            .getPropertyValue('--is-small-screen')
            .trim() === 'true';
    };

    useEffect(() => {
        const smallScreen = isSmallScreen(); // Leer el valor de la variable CSS

        if (isBurguerMenuOpen && smallScreen) {
            
            refs[0].current.setAttribute('class', 'group1Start');
            refs[1].current.setAttribute('class', 'group2Start');
        } else {
            refs[0].current.setAttribute('class', 'group1End');
            refs[1].current.setAttribute('class', 'group2End');
        }
    }, [refs, isBurguerMenuOpen]);

};

export default useTogleLogo;