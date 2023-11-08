import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { headerReducer } from 'features/Header';

const rootReducer = combineReducers({
    header: headerReducer
});

export const store = configureStore({
    reducer: rootReducer,
    devTools: IS_DEV
});
