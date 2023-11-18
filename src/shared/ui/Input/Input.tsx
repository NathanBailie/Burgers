import { classNames } from 'shared/lib/classNames/classNames';
import { memo, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import type { OrderSchema } from 'features/Order';
import { orderActions } from 'features/Order/model/slices/orderSlice';
import cls from './Input.module.scss';

interface InputProps {
    inputType: string
    placeholder: string
    inputValue: string
    stateField: keyof OrderSchema
}

export const Input = memo((props: InputProps) => {
    const { inputType, placeholder, inputValue, stateField } = props;
    const dispatch = useDispatch();

    const onChangeValue = (field: keyof OrderSchema, e: ChangeEvent<HTMLInputElement>) => {
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
