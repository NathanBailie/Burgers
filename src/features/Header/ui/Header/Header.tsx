import { classNames } from 'shared/lib/classNames/classNames';
import type { Mods } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import logo from 'shared/assets/images/menu/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { headerActions } from '../../model/slices/headerSlice';
import { getCurrency, getHamburgerCondition } from '../../model/selectors/getHeaderSelectors';
import cls from './Header.module.scss';

export const Header = memo(() => {
    const dispatch = useDispatch();
    const currentCurrency = useSelector(getCurrency);
    const hamburgerCondition = useSelector(getHamburgerCondition);

    const changeCurrency = () => {
        dispatch(headerActions.changeCurrency());
    };

    const activateHamburger = () => {
        dispatch(headerActions.activateHamburger());
    };

    const deactivateHamburger = () => {
        dispatch(headerActions.deactivateHamburger());
    };

    const menuMods: Mods = {
        [cls.Header__container_active]: hamburgerCondition
    };

    const hamburgerMods: Mods = {
        [cls.Header__hamburger_active]: hamburgerCondition
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
                            <a>
                                Почему у нас
                            </a>
                        </li>
                        <li className={cls.menu__item}>
                            <a>
                                Меню бургеров
                            </a>
                        </li>
                        <li className={cls.menu__item}>
                            <a>
                                Оформление заказа
                            </a>
                        </li>
                    </ul>
                </nav>
                <button className={cls.Header__currency} onClick={changeCurrency}>
                    {currentCurrency}
                </button>
            </div>
            <div
                className={classNames(cls.Header__hamburger, hamburgerMods, [])}
                onClick={hamburgerCondition ? deactivateHamburger : activateHamburger}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
});

Header.displayName = 'Header';
