import { classNames } from 'shared/lib/classNames/classNames';
import { memo, type ButtonHTMLAttributes } from 'react';
import ShoppingCard from 'shared/assets/images/shopping-card.png';
import cls from './Button.module.scss';

export enum ButtonTheme {
    RED = 'red',
    YELLOW = 'yellow',
}

export enum ButtonImage {
    SHOPPING_CARD = 'shoppingCard',
}

const images = {
    shoppingCard: ShoppingCard
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: ButtonTheme
    width?: string
    height?: string
    text: string
    imageName?: ButtonImage
}

export const Button = memo((props: ButtonProps) => {
    const {
        theme = ButtonTheme.YELLOW,
        width = '182',
        height = '62',
        text,
        imageName
    } = props;

    return (
        <button
            type="button"
            className={classNames(
                cls.Button,
                {},
                [cls[theme]]
            )}
            style={{
                width: `${width}px`,
                height: `${height}px`
            }}
        >
            <span className={cls.Button__text}>
                {text}
            </span>
            {imageName && <img
                src={images[imageName]}
                alt={images[imageName]}
                className={cls.Button__image}
            />
            }
        </button>
    );
});

Button.displayName = 'Button';
