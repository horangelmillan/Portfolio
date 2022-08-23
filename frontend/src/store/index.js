import { configureStore } from '@reduxjs/toolkit';
import nigthLigthMode from './slices/nigthLigthMode.slice';
import isLoading from './slices/isLoading.slice';
import isRetract from './slices/isRetract.slice';
import switchImg from './slices/switchImg.slice';
import pathLocation from './slices/pathLocation.slice';


export default configureStore({
    reducer: {
        nigthLigthMode,
        isLoading,
        isRetract,
        switchImg,
        pathLocation

    }
});