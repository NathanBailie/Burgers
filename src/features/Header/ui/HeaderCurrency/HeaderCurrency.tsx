import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrency } from 'features/Header/model/selectors/getHeaderSelectors';
import { headerActions } from 'features/Header/model/slices/headerSlice';
import cls from './HeaderCurrency.module.scss';

export const HeaderCurrency = memo(() => {
    const dispatch = useDispatch();
    const currentCurrency = useSelector(getCurrency);

    const changeCurrency = () => {
        dispatch(headerActions.changeCurrency());
    };

    return (
        <button className={classNames(cls.HeaderCurrency, {}, [])} onClick={changeCurrency}>
            {currentCurrency}
        </button>
    );
});

HeaderCurrency.displayName = 'HeaderCurrency';
