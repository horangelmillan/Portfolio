import { createSlice } from '@reduxjs/toolkit';

const isBurguerMenuOpen = createSlice({
    name: 'isBurguerMenuOpen',
    initialState: false,
    reducers: {
        setIsBurguerMenuOpen: (state, action) => {
            return state.valueOf() ? false : true;
        }
    }
});

export const { setIsBurguerMenuOpen } = isBurguerMenuOpen.actions;

export default isBurguerMenuOpen.reducer;