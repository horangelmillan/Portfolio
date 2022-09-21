import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { firstLoad } from "../../../../store/slices/isRetract.slice";

const useNormalizeTranslate = () => {
    const dispatch = useDispatch();

    const location = useLocation();

    const [isNormalize, setIsNormalize] = useState(false);

    useEffect(() => {
        if (isNormalize === false) {
            dispatch(firstLoad(location));
            return () => {
                setIsNormalize(true);
            };
        };
    }, [location, dispatch, isNormalize, setIsNormalize]);
};

export default useNormalizeTranslate;