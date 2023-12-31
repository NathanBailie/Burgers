import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import orderBox from 'shared/assets/images/orderBox.png';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import {
    getName,
    getNameError,
    getOrder,
    getOrderError,
    getPhone,
    getPhoneError
} from '../model/selectors/getOrderSelectors';
import { Input } from 'shared/ui/Input/Input';
import cls from './Order.module.scss';
import { ErrorText } from 'shared/ui/ErrorText/ErrorText';
import { Modal } from 'shared/ui/Modal/Modal';
import useStyle from 'shared/lib/hooks/useStyle';

export const Order = memo(() => {
    const order = useSelector(getOrder);
    const name = useSelector(getName);
    const phone = useSelector(getPhone);

    const orderError = useSelector(getOrderError);
    const nameError = useSelector(getNameError);
    const phoneError = useSelector(getPhoneError);

    const { style, setNewStyle } = useStyle();

    return (
        <section className={classNames(cls.Order, {}, [])} id="order-section">
            <div className={classNames(cls.Order__container, {}, [])}>
                <h2 className={cls.Order__title}>
                    оформление заказа
                </h2>
                <div className={cls.Order__image}>
                    <img src={orderBox} alt="orderBox" style={style} onMouseMove={setNewStyle} />
                </div>
                <div className={cls.Order__form}>
                    <p className={cls.Order__description}>
                        Заполните все данные и наш менеджер свяжется с вами для подтверждения заказа
                    </p>
                    <ErrorText error={orderError} />
                    <Input
                        inputType="order"
                        placeholder='Ваш заказ'
                        inputValue={order}
                        stateField='order'
                    />

                    <ErrorText error={nameError} />
                    <Input
                        inputType="name"
                        placeholder='Ваше имя'
                        inputValue={name}
                        stateField='name'
                    />

                    <ErrorText error={phoneError} />
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
                        postOrder
                    />
                </div>
            </div>
            <Modal />
        </section>
    );
});

Order.displayName = 'Order';
