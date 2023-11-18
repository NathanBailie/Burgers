import { type StateSchema } from 'app/providers/StoreProvider';

export const getOrder = (state: StateSchema) => state.order.order;
export const getName = (state: StateSchema) => state.order.name;
export const getPhone = (state: StateSchema) => state.order.phone;
