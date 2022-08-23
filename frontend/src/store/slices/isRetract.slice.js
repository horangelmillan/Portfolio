import { createSlice } from '@reduxjs/toolkit';
import { setSwitchImg } from './switchImg.slice';
import pageParams from '../../utils/pageParams.util.json';

export const isRetractSlice = createSlice({
    name: 'isRetract',
    initialState: 33,
    reducers: {
        setIsRetract: (state, action) => {
            return action.payload;
        }
    }
});

export const { setIsRetract } = isRetractSlice.actions;

export const firstLoad = location => dispatch => {
    for (const page in pageParams) {
        if (page === location.pathname.slice(1)) {
            dispatch(setIsRetract(pageParams[page].translate));
            dispatch(setSwitchImg(pageParams[page]?.img));
        };
    };
};

export const load = (valueTranslate, currentValue, location) => dispatch => {

    if (currentValue === valueTranslate) {
        return 
    } else {
        dispatch(setIsRetract(33));
        setTimeout(() => {
            setTimeout(() => {
                dispatch(setIsRetract(valueTranslate));
            }, 500);
            for (const page in pageParams) {
                if (page === location.slice(1)) {
                    console.log(location)
                    dispatch(setSwitchImg(pageParams[page].img));
                };
            };
        }, 1000);
    };
};

export default isRetractSlice.reducer;