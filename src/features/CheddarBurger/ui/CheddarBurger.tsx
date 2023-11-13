import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './CheddarBurger.module.scss';

export const CheddarBurger = memo(() => {

    return (
        <div className={classNames(cls.CheddarBurger, {}, [])}>
            /
        </div>
    );
});

CheddarBurger.displayName = 'CheddarBurger';
