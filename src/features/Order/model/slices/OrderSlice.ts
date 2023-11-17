import { createSlice } from '@reduxjs/toolkit';
import type { OrderSchema } from '../types/OrderSchema';

const initialState: OrderSchema = {
    order: '',
    name: '',
    phone: ''
};

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        changeOrder: (state, action) => {
            state.order = action.payload;
        },
        changeName: (state, action) => {
            state.name = action.payload;
        },
        changePhone: (state, action) => {
            state.phone = action.payload;
        }
    }
});

export const { actions: orderActions } = orderSlice;
export const { reducer: orderReducer } = orderSlice;
