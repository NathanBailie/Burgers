import type { StateSchema } from 'app/providers/StoreProvider';

export const getCurrency = (state: StateSchema) => state.header.currency;
