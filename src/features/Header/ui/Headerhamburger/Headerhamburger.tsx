import { classNames } from 'shared/lib/classNames/classNames';
import type { Mods } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHamburgerCondition } from 'features/Header/model/selectors/getHeaderSelectors';
import { headerActions } from 'features/Header/model/slices/headerSlice';
import cls from './HeaderHamburger.module.scss';

export const HeaderHamburger = memo(() => {
    const dispatch = useDispatch();
    const hamburgerCondition = useSelector(getHamburgerCondition);

    const toggleHamburgerCondition = () => {
        dispatch(headerActions.toggleHamburger());
    };

    const hamburgerMods: Mods = {
        [cls.HeaderHamburger_active]: hamburgerCondition
    };

    return (
        <div
            className={classNames(cls.HeaderHamburger, hamburgerMods, [])}
            onClick={toggleHamburgerCondition}
        >
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
});

HeaderHamburger.displayName = 'HeaderHamburger';
