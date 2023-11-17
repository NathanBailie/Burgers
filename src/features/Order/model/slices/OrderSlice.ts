import { createSlice } from '@reduxjs/toolkit';
import { OrderSchema } from '../types/OrderSchema';

const initialState: OrderSchema = {
    order: '',
    name: '',
    phone: ''
};

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        changeName: (state) => {

        }
    }
});

export const { actions: orderActions } = orderSlice;
export const { reducer: orderReducer } = orderSlice;
