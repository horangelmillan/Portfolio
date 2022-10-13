import { createSlice } from '@reduxjs/toolkit';

const modalContentSlice = createSlice({
    name: 'modalContent',
    initialState: 'Login',
    reducers: {
        setModalContent: (state, action) => {
            return action.payload;
        }
    }
});

export const { setModalContent } = modalContentSlice.actions;

export const waitAnimationContent = content => dispatch => {
    setTimeout(() => {
        dispatch(setModalContent(content));
    }, 5000);
};

export default modalContentSlice.reducer;