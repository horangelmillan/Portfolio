import { useEffect, useState } from "react";

const useAwaitAnimation = (ref, state, time, modeOn, classAnimation, actions) => {

    const [animateClass, setAnimateClass] = useState();

    useEffect(() => {
        state ? setAnimateClass(classAnimation[0]) : setAnimateClass(classAnimation[1]);

        setTimeout(() => {
            ref.current.style.display = state ? modeOn : 'none';
            
            actions && actions(state);
        }, state ? 0 : time * 900);

    }, [ref, state, time, modeOn, classAnimation, actions]);

    return { animateClass };
};

export default useAwaitAnimation;