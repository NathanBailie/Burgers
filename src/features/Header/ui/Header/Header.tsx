import { classNames } from 'shared/lib/classNames/classNames';
import type { Mods } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import logo from 'shared/assets/images/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { headerActions } from '../../model/slices/headerSlice';
import { getHamburgerCondition } from '../../model/selectors/getHeaderSelectors';
import { HeaderHamburger } from '../Headerhamburger/Headerhamburger';
import { HeaderCurrency } from '../HeaderCurrency/HeaderCurrency';
import cls from './Header.module.scss';

export const Header = memo(() => {
    const dispatch = useDispatch();
    const hamburgerCondition = useSelector(getHamburgerCondition);

    const deactivateHamburger = () => {
        dispatch(headerActions.deactivateHamburger());
    };

    const menuMods: Mods = {
        [cls.Header__container_active]: hamburgerCondition
    };

    return (
        <div className={classNames(cls.Header, {}, [])}>
            <div className={classNames(cls.Header__container, menuMods, ['container'])}>
                <div className={cls.Header__logo}>
                    <img src={logo} alt="logo" />
                </div>
                <nav className={cls.menu}>
                    <ul className={cls.menu__list}>
                        <li className={cls.menu__item}>
                            <a onClick={deactivateHamburger}>
                                Почему у нас
                            </a>
                        </li>
                        <li className={cls.menu__item}>
                            <a onClick={deactivateHamburger}>
                                Меню бургеров
                            </a>
                        </li>
                        <li className={cls.menu__item}>
                            <a onClick={deactivateHamburger}>
                                Оформление заказа
                            </a>
                        </li>
                    </ul>
                </nav>
                <HeaderCurrency />
            </div>
            <HeaderHamburger />
        </div>
    );
});

Header.displayName = 'Header';
