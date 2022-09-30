import { createSlice } from '@reduxjs/toolkit';

const scrollDataSlice = createSlice({
    name: "scrollData",
    initialState: null,
    reducers: {
        setScrollData: (state, action) => {
            return action.payload;
        }
    }
});

export const { setScrollData } = scrollDataSlice.actions;

export default scrollDataSlice.reducer;