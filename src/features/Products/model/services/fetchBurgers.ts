import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBurgers = createAsyncThunk('products/fetchBurgers', async () => {
    const response = await axios.get('https://testologia.site/burgers-data?extra=black');
    return response.data;
});
