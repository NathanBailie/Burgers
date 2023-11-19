import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { ChangeValuePayload, OrderSchema, Field } from '../types/OrderSchema';
import { fetchOrders } from '../services/fetchOrders';

const initialState: OrderSchema = {
    order: '',
    name: '',
    phone: '',
    orderError: false,
    nameError: false,
    phoneError: false,
    modalIsOpen: false,
    modalText: ''
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
        resetOrderFiels: (state) => {
            const fields: Field[] = ['order', 'name', 'phone'];

            fields.forEach((field: Field) => {
                state[field] = '';
            });
        },
        changeFieldError: (state, action: PayloadAction<{ fieldName: Field, condition: boolean }>) => {
            const { fieldName, condition } = action.payload;
            state[`${fieldName}Error`] = condition;
        },
        openModal: (state) => {
            state.modalIsOpen = true;
        },
        closeModal: (state) => {
            state.modalIsOpen = false;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchOrders.pending, (state) => { })
            .addCase(fetchOrders.fulfilled, (state, action) => {
                state.modalIsOpen = true;
                state.modalText = 'Спасибо за заказ!';
            })
            .addCase(fetchOrders.rejected, (state, action) => {
                state.modalIsOpen = true;
                state.modalText = 'Ошибка при отправке данных, пожалуйста повторите Ваш заказ';
            });
    }

});

export const { actions: orderActions } = orderSlice;
export const { reducer: orderReducer } = orderSlice;
