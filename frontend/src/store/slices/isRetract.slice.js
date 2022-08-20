import { createSlice } from '@reduxjs/toolkit';

export const isRetractSlice = createSlice({
    name: 'isRetract',
    initialState: 63,
    reducers: {
        setIsRetract: (state, action) => {
            return action.payload;
        }
    }
});

export const { setIsRetract } = isRetractSlice.actions;

export const load = (valueTranslate, currentValue) => dispatch => {
    if (currentValue === valueTranslate) {
        return
    } else {
        dispatch(setIsRetract(33));
        setTimeout(() => {
            dispatch(setIsRetract(valueTranslate));
        }, 3000);
    };
};

export default isRetractSlice.reducer;