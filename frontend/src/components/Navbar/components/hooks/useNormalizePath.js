import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { load } from "../../../../store/slices/isRetract.slice";
import pageParams from '../../../../utils/pageParams.util.json';

const useNormalizePath = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    
    const currentTranslate = useSelector(state => state.isRetract);

    const [isNormalize, setIsNormalize] = useState(null);

    useEffect(() => {
        if (isNormalize === null) {
            setIsNormalize(location.pathname);
        } else {
            for (const page in pageParams) {
                if (pageParams[page].path === location.pathname) {
                    dispatch(load(pageParams[page].translate, currentTranslate, location.pathname));
                };
            };
        };
    }, [location, currentTranslate, dispatch, isNormalize]);
};

export default useNormalizePath;