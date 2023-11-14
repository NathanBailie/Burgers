import { createSlice } from '@reduxjs/toolkit';
import { fetchBurgers } from '../services/fetchBurgers';
import type { ProductsSchema } from '../types/ProductsSchema';

const initialState: ProductsSchema = {
    data: [],
    status: 'idle',
    error: null
};

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBurgers.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchBurgers.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchBurgers.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message ?? null;
            });
    }
});

export const { actions: productsActions } = productsSlice;
export const { reducer: productsReducer } = productsSlice;
