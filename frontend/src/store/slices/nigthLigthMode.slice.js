import { createSlice } from '@reduxjs/toolkit';

export const nigthLigthModeSlice = createSlice({
    name: 'nigthLigthMode',
    initialState: false,
    reducers: {
        changeMode(state, action) {
            return state = state === true ? false : true;
        }
    }
})

export const { changeMode } = nigthLigthModeSlice.actions;

export default nigthLigthModeSlice.reducer;
