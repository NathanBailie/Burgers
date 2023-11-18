import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ErrorText.module.scss';

interface ErrorTextProps {
    error: boolean
}

export const ErrorText = memo((props: ErrorTextProps) => {
    const { error } = props;
    let errorText = null;

    if (error) {
        errorText = (
            <span className={classNames(cls.ErrorText, {}, [])}>
                Заполните поле ниже
            </span>
        )
    }

    return errorText;
});

ErrorText.displayName = 'ErrorText';
