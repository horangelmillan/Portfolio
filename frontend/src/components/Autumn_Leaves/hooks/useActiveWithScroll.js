import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useActiveWithScroll = (ref) => {
    const [active, setActive] = useState(false);

    const scrollData = useSelector(state => state.scrollData);

    useEffect(() => {
        if (scrollData >= ref.current.getBoundingClientRect().top - 400) {
            setActive(true);
        } else {
            setActive(false);
            ref.current.innerHTML = "";
        };
    }, [scrollData, ref]);

    return { active };
};

export default useActiveWithScroll;