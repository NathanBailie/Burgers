export const currencies = [
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
