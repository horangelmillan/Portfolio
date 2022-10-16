import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import Token from '../../../utils/token.util';
import { setModalContent, waitAnimationContent } from "../../../store/slices/modalContent.slice";

const useVerifyToken = (state) => {
    const dispatch = useDispatch();

    const [firstRender, setFirstRender] = useState();

    useEffect(() => {
        if (state === false) {
            return
        };

        const token = Token();

        if (token) {
            axios.get('http://localhost:4000/api/v1/users/verify', {
                headers: { Authorization: `Bearer ${token}` }
            }).then(res => {
                console.log(res.data);
                if (firstRender) {
                    return
                };
                dispatch(waitAnimationContent('Profile'));
                setFirstRender(true);
            });
        } else {
            dispatch(setModalContent('Login'));
            firstRender && setFirstRender(false);
        };

    }, [dispatch, state, firstRender]);
};

export default useVerifyToken;