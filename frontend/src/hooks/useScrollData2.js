import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setScrollData } from "../store/slices/scrollData.slice";

const useScrollData = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const setPositionScroll = () => {
            dispatch(setScrollData(window.scrollY));
        };

        document.addEventListener('scroll', setPositionScroll);

        return () => {
            document.removeEventListener('scroll', setPositionScroll);
        };
    }, [dispatch]);
};

export default useScrollData;