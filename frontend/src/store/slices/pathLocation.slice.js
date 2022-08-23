import { createSlice } from '@reduxjs/toolkit';

export const pathLocationSlice = createSlice({
    name: 'pathLocation',
    initialState: null,
    reducers: {
        setPathLocation: (state, action) => {
            return action.payload;
        }
    }
});

export const { setPathLocation } = pathLocationSlice.actions;

export default pathLocationSlice.reducer;
