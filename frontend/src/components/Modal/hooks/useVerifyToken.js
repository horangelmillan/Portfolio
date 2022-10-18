import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import Token from '../../../utils/token.util';
import { setModalContent, waitAnimationContent } from "../../../store/slices/modalContent.slice";

const useVerifyToken = (state) => {
    const dispatch = useDispatch();

    const [firstRender, setFirstRender] = useState();
    const [isValidToken, setIsValidToken] = useState();

    useEffect(() => {
        if (state === false) {
            return
        };

        const token = Token();

        if (token) {
            axios.get('http://localhost:4000/api/v1/users/verify', {
                headers: { Authorization: `Bearer ${token}` }
            }).then(() => {
                if (firstRender) {
                    return
                };
                setIsValidToken(true);
                dispatch(waitAnimationContent('Profile'));
                setFirstRender(true);
            }).catch(err => {
                if (err) {
                    setIsValidToken(false);
                    dispatch(setModalContent('Login'));
                    firstRender && setFirstRender(false);
                    localStorage.clear();
                };
            });
        } else {
            setIsValidToken(false);
            dispatch(setModalContent('Login'));
            firstRender && setFirstRender(false);
        };

    }, [dispatch, state, firstRender]);

    return { isValidToken };
};

export default useVerifyToken;