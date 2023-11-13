import { createSlice } from '@reduxjs/toolkit';
import type { HeaderSchema } from '../types/HeaderSchema';

export interface HeaderState {
    value: number
}

const initialState: HeaderSchema = {
    currency: '$',
    coefficient: 1,
    currencyId: 0,
    hamburgerCondition: false
};

const changeCurr = (state: HeaderSchema) => {
    const { currency, coefficient, currencyId } = state;
    let newCurrency: string;
    let newCoefficient: number;
    let newCurrencyId: number;

    const currencies = [
        createCurrency('$', 1),
        createCurrency('₽', 95),
        createCurrency('BYN', 3.3),
        createCurrency('€', 0.94),
        createCurrency('₺', 28),
        createCurrency('¥', 7.3)
    ];

    function createCurrency(sign: string, coefficient: number) {
        return { sign, coeff: coefficient };
    }

    if (currencyId === currencies.length - 1) {
        newCurrencyId = 0;
    } else {
        newCurrencyId = Number(currencyId) + 1;
    }

    newCurrency = currencies[newCurrencyId].sign;
    newCoefficient = currencies[newCurrencyId].coeff;

    return [newCurrency, newCoefficient, newCurrencyId];
};

export const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        changeCurrency: (state) => {
            const [newCurrency, newCoefficient, newCurrencyId] = changeCurr(state);
            state.currency = newCurrency;
            state.coefficient = newCoefficient;
            state.currencyId = newCurrencyId;
        },
        activateHamburger: (state) => {
            state.hamburgerCondition = true;
        },
        deactivateHamburger: (state) => {
            state.hamburgerCondition = false;
        }
    }
});

export const { actions: headerActions } = headerSlice;
export const { reducer: headerReducer } = headerSlice;
