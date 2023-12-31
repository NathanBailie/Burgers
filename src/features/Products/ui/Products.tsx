import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cls from './Products.module.scss';
import { getData, getError, getStatus } from '../model/selectors/productsSelectors';
import { fetchBurgers } from '../model/services/fetchBurgers';
import { type AppDispatch } from 'app/providers/StoreProvider/config/store';
import { getCurrency, getCurrencyCoefficient } from 'features/Header/model/selectors/getHeaderSelectors';
import { Button, ButtonImage, ButtonTheme } from 'shared/ui/Button/Button';
import { Loader } from 'shared/ui/Loader/Loader';
import { Error } from 'shared/ui/Error/Error';

export const Products = memo(() => {
    const dispatch = useDispatch<AppDispatch>();
    const products = useSelector(getData);
    const status = useSelector(getStatus);
    const error = useSelector(getError);
    const currency = useSelector(getCurrency);
    const coefficient = useSelector(getCurrencyCoefficient);

    useEffect(() => {
        dispatch(fetchBurgers());
    }, [dispatch]);

    return (
        <section className={classNames(cls.Products, {}, [])} id="products-section">
            <h2 className={cls.Products__title}>
                выберите свой бургер
            </h2>
            {
                status === 'loading'
                    ? <Loader />
                    : null
            }

            {
                status === 'failed'
                    ? <Error />
                    : null
            }

            <div className={classNames(cls.Products__container, {}, [])}>
                {
                    status === 'succeeded'
                        ? products.map((item, index) => {
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
                                                {`${(item.basePrice * coefficient).toFixed(1)} ${currency}`}
                                            </span>
                                            <span className={cls.Products__weight}>
                                                {`${item.grams} гр`}
                                            </span>
                                        </div>
                                        <Button
                                            theme={ButtonTheme.YELLOW}
                                            width='182'
                                            height='62'
                                            text='Заказать'
                                            imageName={ButtonImage.SHOPPING_CARD}
                                            productName={item.title}
                                        />
                                    </div>
                                </div>
                            )
                        })
                        : null
                }
            </div>
        </section>
    );
});

Products.displayName = 'Products';
