const sendOrder = async (orderData: string) => {
    const API_URL = 'https://testologia.site/burgers-order';

    try {
        const response = await fetch('https://testologia.site/burgers-order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderData)
        });

        alert('Спасибо за заказ!');
    } catch (e: any) {
        alert('Ошибка при отправке данных, пожалуйста повторите Ваш заказ');
        console.error(e.message);
    }
};

export default sendOrder;
