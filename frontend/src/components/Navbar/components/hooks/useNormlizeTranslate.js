import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { firstLoad } from "../../../../store/slices/isRetract.slice";
import { setPathLocation } from "../../../../store/slices/pathLocation.slice";


const useNormalizeTranslate = () => {
    const dispatch = useDispatch();

    const currentTranslate = useSelector(state => state.isRetract);

    const location = useLocation();

    const [isNormalize, setIsNormalize] = useState(false);

    useEffect(() => {
        if (isNormalize === false) {
            dispatch(firstLoad(location));
            return () => {
                dispatch(setPathLocation(location.pathname.slice(1)));
                setIsNormalize(true);
            };
        };
    }, [location, currentTranslate, dispatch, isNormalize, setIsNormalize]);
};

export default useNormalizeTranslate;