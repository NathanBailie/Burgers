import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { headerReducer } from 'features/Header';
import { productsReducer } from 'features/Products';
import { useDispatch } from 'react-redux';

const rootReducer = combineReducers({
    header: headerReducer,
    products: productsReducer
});

export const store = configureStore({
    reducer: rootReducer,
    devTools: IS_DEV
});

export type AppDispatch = typeof store.dispatch;
