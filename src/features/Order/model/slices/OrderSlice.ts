import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { ChangeValuePayload, OrderSchema } from '../types/OrderSchema';

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
            if (state.order === '') {
                state.orderError = true;
            }

            if (state.name === '') {
                state.nameError = true;
            }

            if (state.phone === '') {
                state.phoneError = true;
            }
        }
    }
});

export const { actions: orderActions } = orderSlice;
export const { reducer: orderReducer } = orderSlice;
