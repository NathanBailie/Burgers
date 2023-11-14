import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cls from './Products.module.scss';
import { getData, getError, getStatus } from '../model/selectors/productsSelectors';
import { fetchBurgers } from '../model/services/fetchBurgers';
import type { AppDispatch } from 'app/providers/StoreProvider/config/store';

export const Products = memo(() => {
    const dispatch = useDispatch<AppDispatch>();
    const products = useSelector(getData);
    const status = useSelector(getStatus);
    const error = useSelector(getError);
    console.log(products);

    useEffect(() => {
        dispatch(fetchBurgers());
    }, [dispatch]);

    return (
        <div className={classNames(cls.Products, {}, ['container'])}>
            <div className={cls.Products__container}>
                <h2 className={cls.Products__title}>
                    выберите свой бургер
                </h2>
            </div>
        </div>
    );
});

Products.displayName = 'Products';
