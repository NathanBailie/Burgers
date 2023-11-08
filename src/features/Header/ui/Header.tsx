import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import logo from 'shared/assets/images/menu/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { headerActions } from '../model/slices/headerSlice';
import { getCurrency } from '../model/selectors/getCurrency';
import cls from './Header.module.scss';

export const Header = memo(() => {
    const dispatch = useDispatch();
    const currentCurrency = useSelector(getCurrency);
    console.log(currentCurrency);

    const changeCurrency = () => {
        dispatch(headerActions.changeCurrency());
    };

    return (
        <div className={classNames(cls.Header, {}, [])}>
            <div className={classNames(cls.Header_container, {}, ['container'])}>
                <div className={cls.Header_logo}>
                    <img src={logo} alt="logo" />
                </div>
                <nav className={cls.menu}>
                    <ul className={cls.menu_list}>
                        <li className={cls.menu_item}>
                            <a>
                                Почему у нас
                            </a>
                        </li>
                        <li className={cls.menu_item}>
                            <a>
                                Меню бургеров
                            </a>
                        </li>
                        <li className={cls.menu_item}>
                            <a>
                                Оформление заказа
                            </a>
                        </li>
                    </ul>
                </nav>
                <button className={cls.Header_currency} onClick={changeCurrency}>
                    {currentCurrency}
                </button>
            </div>
            <div className={cls.Header_hamburger}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
});

Header.displayName = 'Header';
