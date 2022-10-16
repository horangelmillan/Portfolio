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

export const waitAnimationContent = (content, options = { seconds: 1, ref: null }) => dispatch => {
    options.ref && (options.ref.current.style.animation = `fadeOut ${options.seconds}s`);

    setTimeout(() => {
        dispatch(setModalContent(content));
    }, options.seconds * 1000);
};

export default modalContentSlice.reducer;