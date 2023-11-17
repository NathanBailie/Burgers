import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { sectionData } from '../lib/whyData';
import cls from './Why.module.scss';

export const Why = memo(() => {
    return (
        <div className={classNames(cls.Why, {}, [])}>
            <div className="container">
                <h2 className={cls.Why__title}>
                    почему нас выбирают?
                </h2>
                <div className={cls.Why__advantages}>
                    {sectionData.map((item, index) => {
                        return (
                            <div className={cls.Why__item} key={index}>
                                <img src={item.image} alt={item.alt} className={cls.Why__image} />
                                <h3 className={cls.Why__subtitle}>
                                    {item.subtitle}
                                </h3>
                                <p className={cls.Why__text}>
                                    {item.text}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
});

Why.displayName = 'Why';
