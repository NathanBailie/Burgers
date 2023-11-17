import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import orderBox from 'shared/assets/images/orderBox.png';
import cls from './Order.module.scss';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getName, getOrder, getPhone } from '../model/selectors/orderSelectors';

export const Order = memo(() => {
    const dispatch = useDispatch();
    const order = useSelector(getOrder);
    const name = useSelector(getName);
    const phone = useSelector(getPhone);

    return (
        <div className={classNames(cls.Order, {}, [])}>
            <div className={classNames(cls.Order__container, {}, ['container'])}>
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
                    <input type="text" placeholder='Ваш заказ' className={cls.Order__input} value={order} />
                    <input type="text" placeholder='Ваше имя' className={cls.Order__input} value={name} />
                    <input type="text" placeholder='Ваш телефон' className={cls.Order__input} value={phone} />
                    <Button
                        theme={ButtonTheme.YELLOW}
                        width='344'
                        height='62'
                        text='Оформить заказ'
                    />

                </div>
            </div>
        </div>
    );
});

Order.displayName = 'Order';
