import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import ChadderBurger from 'shared/assets/images/cheddarBurger.png';
import cls from './CheddarBurger.module.scss';

export const CheddarBurger = memo(() => {
    return (
        <section className={classNames(cls.CheddarBurger, {}, ['container'])}>
            <div className={cls.CheddarBurger__container}>
                <div className={cls.CheddarBurger__newMenu}>
                    Новое меню
                </div>
                <h1 className={cls.CheddarBurger__title}>
                    бургер чеддер
                </h1>
                <p className={cls.CheddarBurger__text}>
                    Мы обновили наше меню, спешите попробовать сезонные новинки
                    и насладиться отличным вкусом наших бургеров. Готовим для
                    вас лучшие бургеры в городе из отборной мраморной говядины.
                </p>
                <button className={cls.CheddarBurger__button}>
                    Смотреть меню
                </button>
            </div>
            <div className={cls.CheddarBurger__image}>
                <img src={ChadderBurger} alt="ChadderBurger" />
            </div>
        </section>
    );
});

CheddarBurger.displayName = 'CheddarBurger';
