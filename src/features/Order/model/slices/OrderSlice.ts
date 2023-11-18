import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { OrderSchema } from '../types/OrderSchema';

interface ChangeValuePayload {
    field: keyof OrderSchema
    value: string
}

const initialState: OrderSchema = {
    order: '',
    name: '',
    phone: ''
};

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        changeValue: (state, action: PayloadAction<ChangeValuePayload>) => {
            const { field, value } = action.payload;
            state[field] = value;
        }
    }
});

export const { actions: orderActions } = orderSlice;
export const { reducer: orderReducer } = orderSlice;
