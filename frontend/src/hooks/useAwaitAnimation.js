import { useEffect, useState } from "react";

const useAwaitAnimation = (ref, state, time, modeOn, classAnimation, actions, outActions) => {

    const [animateClass, setAnimateClass] = useState();

    useEffect(() => {
        state ? setAnimateClass(classAnimation[0]) : setAnimateClass(classAnimation[1]);

        setTimeout(() => {
            ref.current.style.display = state ? modeOn : 'none';

            if (!state) {
                return outActions && outActions();
            };
            
            actions && actions();
        }, state ? time * 1000 : time * 900);

    }, [ref, state, time, modeOn, classAnimation, actions, outActions]);

    return { animateClass };
};

export default useAwaitAnimation;