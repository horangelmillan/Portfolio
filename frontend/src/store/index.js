import { configureStore } from '@reduxjs/toolkit';
import nigthLigthMode from './slices/nigthLigthMode.slice';
import isLoading from './slices/isLoading.slice';
import isRetract from './slices/isRetract.slice';
import switchImg from './slices/switchImg.slice';
import scrollData from './slices/scrollData.slice';
import isShowModal from './slices/isShowModal.slice';
import modalContent from './slices/modalContent.slice';

export default configureStore({
    reducer: {
        nigthLigthMode,
        isLoading,
        isRetract,
        switchImg,
        scrollData,
        isShowModal,
        modalContent
    }
});