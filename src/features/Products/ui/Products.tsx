import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cls from './Products.module.scss';
import { getData, getError, getStatus } from '../model/selectors/productsSelectors';
import { fetchBurgers } from '../model/services/fetchBurgers';
import { type AppDispatch } from 'app/providers/StoreProvider/config/store';
import { getCurrency } from 'features/Header/model/selectors/getHeaderSelectors';

export const Products = memo(() => {
    const dispatch = useDispatch<AppDispatch>();
    const products = useSelector(getData);
    const status = useSelector(getStatus);
    const error = useSelector(getError);
    const currency = useSelector(getCurrency)
    console.log(products);

    useEffect(() => {
        dispatch(fetchBurgers());
    }, [dispatch]);

    return (
        <div className={classNames(cls.Products, {}, ['container'])}>
            <h2 className={cls.Products__title}>
                выберите свой бургер
            </h2>
            <div className={cls.Products__container}>
                {products.map((item, index) => {
                    return (
                        <div className={cls.Products__burger} key={index}>
                            <div className={cls.Products__image}>
                                <img src={item.image} alt={item.title} />
                            </div>
                            <div className={cls.Products__subtitle}>
                                {item.title}
                            </div>
                            <div className={cls.Products__text}>
                                {item.text}
                            </div>
                            <div className={cls.Products__info}>
                                <div className={cls.Products__numbers}>
                                    <span className={cls.Products__price}>
                                        {`${item.price} ${currency}`}
                                    </span>
                                    <span className={cls.Products__weight}>
                                        {`${item.grams} гр`}
                                    </span>
                                </div>
                                <button className={cls.Products__order}>
                                    Заказать
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
});

Products.displayName = 'Products';
