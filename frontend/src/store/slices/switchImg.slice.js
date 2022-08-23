import { createSlice } from '@reduxjs/toolkit';

export const switchImgSlice = createSlice({
    name: 'switchImg',
    initialState: false,
    reducers: {
        setSwitchImg: (state, action) => {
            return action.payload;
        }
    }
});

export const { setSwitchImg } = switchImgSlice.actions;

export default switchImgSlice.reducer;
