import { createSlice } from '@reduxjs/toolkit';
import type { HeaderSchema } from '../types/HeaderSchema';

const currencies = [
    createCurrency('$', 1, 'Dolar'),
    createCurrency('₽', 95, 'Ruble'),
    createCurrency('BYN', 3.3, 'Belarusian ruble'),
    createCurrency('€', 0.94, 'Euro'),
    createCurrency('₺', 28, 'Turkish lira'),
    createCurrency('¥', 7.3, 'Chinese yuan')
];

function createCurrency(
    sign: string,
    coefficient: number,
    title: string
) {
    return { sign, coefficient, title };
}

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
