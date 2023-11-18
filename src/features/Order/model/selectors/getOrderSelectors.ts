import { type StateSchema } from 'app/providers/StoreProvider';

export const getOrder = (state: StateSchema) => state.order.order;
export const getName = (state: StateSchema) => state.order.name;
export const getPhone = (state: StateSchema) => state.order.phone;

export const getOrderError = (state: StateSchema) => state.order.orderError;
export const getNameError = (state: StateSchema) => state.order.nameError;
export const getPhoneError = (state: StateSchema) => state.order.phoneError;
