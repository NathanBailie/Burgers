import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import orderBox from 'shared/assets/images/orderBox.png';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getName, getOrder, getPhone } from '../model/selectors/getOrderSelectors';
import { Input } from 'shared/ui/Input/Input';
import cls from './Order.module.scss';

export const Order = memo(() => {
    const order = useSelector(getOrder);
    const name = useSelector(getName);
    const phone = useSelector(getPhone);

    return (
        <section className={classNames(cls.Order, {}, [])}>
            <div className={classNames(cls.Order__container, {}, [])}>
                <h2 className={cls.Order__title}>
                    оформление заказа
                </h2>
                <div className={cls.Order__image}>
                    <img src={orderBox} alt="orderBox" />
                </div>
                <div className={cls.Order__form}>
                    <p className={cls.Order__description}>
                        Заполните все данные и наш менеджер свяжется с вами для подтверждения заказа
                    </p>
                    <Input
                        inputType="order"
                        placeholder='Ваш заказ'
                        inputValue={order}
                        stateField='order'
                    />
                    <Input
                        inputType="name"
                        placeholder='Ваше имя'
                        inputValue={name}
                        stateField='name'
                    />
                    <Input
                        inputType="number"
                        placeholder='Ваш телефон'
                        inputValue={phone}
                        stateField='phone'
                    />
                    <Button
                        theme={ButtonTheme.YELLOW}
                        width='344'
                        height='62'
                        text='Оформить заказ'
                    />
                </div>
            </div>
        </section>
    );
});

Order.displayName = 'Order';
