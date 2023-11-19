import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchOrders = createAsyncThunk('order/fetchOrder', async (orderData: string) => {
    const API_URL = 'https://testologia.site/burgers-order';

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderData)
        });

        return true;
    } catch (e: any) {
        console.error(e.message);

        return false;
    }
});
