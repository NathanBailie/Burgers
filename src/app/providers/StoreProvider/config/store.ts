import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { headerReducer } from 'features/Header';
import { orderReducer } from 'features/Order';
import { productsReducer } from 'features/Products';
import { useDispatch } from 'react-redux';

const rootReducer = combineReducers({
    header: headerReducer,
    products: productsReducer,
    order: orderReducer
});

export const store = configureStore({
    reducer: rootReducer,
    devTools: IS_DEV
});

export type AppDispatch = typeof store.dispatch;
