import type { StateSchema } from 'app/providers/StoreProvider';

export const getData = (state: StateSchema) => state.products.data;
export const getStatus = (state: StateSchema) => state.products.status;
export const getError = (state: StateSchema) => state.products.error;
