import { createSlice } from '@reduxjs/toolkit';

const isShowModalSlice = createSlice({
    name: 'isShowModal',
    initialState: false,
    reducers: {
        setIsShowModal: (state, action) => {
            return action.payload;
        }
    }
});

export const { setIsShowModal } = isShowModalSlice.actions;

export default isShowModalSlice.reducer;