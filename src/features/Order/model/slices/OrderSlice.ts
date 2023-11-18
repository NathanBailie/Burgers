import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { ChangeValuePayload, OrderSchema, Field } from '../types/OrderSchema';
import sendOrder from '../services/sendOrder';

const initialState: OrderSchema = {
    order: '',
    name: '',
    phone: '',
    orderError: false,
    nameError: false,
    phoneError: false
};

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        changeValue: (state, action: PayloadAction<ChangeValuePayload>) => {
            const { field, value } = action.payload;
            state[field] = value;
        },
        changeOrder: (state, action) => {
            const reg = new RegExp(action.payload);

            if (!reg.test(state.order)) {
                state.order = `${action.payload} - 1шт; ${state.order}`;
            }
        },
        validateForm: (state) => {
            const fields: Field[] = ['order', 'name', 'phone'];

            fields.forEach((field: Field) => {
                state[`${field}Error`] = state[field] === '';
            });

            if (!state.orderError && !state.nameError && !state.phoneError) {
                sendOrder(state.order)
            }
        }
    }
});

export const { actions: orderActions } = orderSlice;
export const { reducer: orderReducer } = orderSlice;
