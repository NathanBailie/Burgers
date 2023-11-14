import { createSlice } from '@reduxjs/toolkit';
import type { HeaderSchema } from '../types/HeaderSchema';
import { currencies } from '../../lib/currencies';

const initialState: HeaderSchema = {
    currency: '$',
    coefficient: 1,
    currencyId: 0,
    currencyTitle: 'Dollar',
    hamburgerCondition: false
};

export const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        changeCurrency: (state) => {
            const { currencyId } = state;

            if (currencyId === currencies.length - 1) {
                state.currencyId = 0;
            } else {
                state.currencyId = Number(currencyId) + 1;
            }

            state.currency = currencies[state.currencyId].sign;
            state.coefficient = currencies[state.currencyId].coefficient;
            state.currencyTitle = currencies[state.currencyId].title;
        },
        toggleHamburger: (state) => {
            state.hamburgerCondition = !state.hamburgerCondition;
        },
        deactivateHamburger: (state) => {
            state.hamburgerCondition = false;
        }
    }
});

export const { actions: headerActions } = headerSlice;
export const { reducer: headerReducer } = headerSlice;
