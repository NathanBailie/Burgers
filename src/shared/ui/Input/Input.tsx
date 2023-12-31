import { classNames } from 'shared/lib/classNames/classNames';
import { memo, type ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { type Field } from 'features/Order';
import { orderActions } from 'features/Order/model/slices/orderSlice';
import cls from './Input.module.scss';

interface InputProps {
    inputType: string
    placeholder: string
    inputValue: string
    stateField: Field
}

export const Input = memo((props: InputProps) => {
    const { inputType, placeholder, inputValue, stateField } = props;
    const dispatch = useDispatch();

    const onChangeValue = (field: Field, e: ChangeEvent<HTMLInputElement>) => {
        dispatch(orderActions.changeValue({ field, value: e.target.value }));
    };

    return (
        <input
            className={classNames(cls.Input, {}, [])}
            type={inputType}
            placeholder={placeholder}
            value={inputValue}
            onChange={(e) => { onChangeValue(stateField, e) }}
        />
    );
});

Input.displayName = 'Input';
