import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { firstLoad } from "../../../../store/slices/isRetract.slice";

const useNormalizeTranslate = () => {
    const dispatch = useDispatch();

    const currentTranslate = useSelector(state => state.isRetract);

    const location = useLocation();

    const [isNormalize, setIsNormalize] = useState(false);

    useEffect(() => {
        if (isNormalize === false) {
            dispatch(firstLoad(location));
            return () => {
                setIsNormalize(true);
            };
        };
    }, [location, currentTranslate, dispatch, isNormalize, setIsNormalize]);
};

export default useNormalizeTranslate;