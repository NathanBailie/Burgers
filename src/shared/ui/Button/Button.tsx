import { classNames } from 'shared/lib/classNames/classNames';
import { memo, type ButtonHTMLAttributes } from 'react';
import ShoppingCard from 'shared/assets/images/shopping-card.png';
import { orderActions } from 'features/Order/model/slices/orderSlice';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from 'app/providers/StoreProvider/config/store';
import useValidate from 'features/Order/model/hooks/useValidate';
import cls from './Button.module.scss';

export enum ButtonTheme {
    RED = 'red',
    YELLOW = 'yellow',
}

export enum ButtonTextColor {
    WHITE = 'white',
    BLACK = 'black',
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
    postOrder?: boolean
    productName?: string
    sectionLink?: string
    textColor?: string
}

export const Button = memo((props: ButtonProps) => {
    const {
        theme = ButtonTheme.YELLOW,
        width = '182',
        height = '62',
        text,
        imageName,
        postOrder = false,
        productName,
        sectionLink,
        textColor = ButtonTextColor.BLACK
    } = props;

    const dispatch = useDispatch<AppDispatch>();
    const { validateFields } = useValidate();

    const updateOrder = (productName: string) => {
        dispatch(orderActions.changeOrder(productName));
    };

    const buttonClickHandle = () => {
        if (productName) {
            updateOrder(productName);
        }

        if (postOrder) {
            validateFields()
        }
    }

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
            onClick={buttonClickHandle}
        >
            <span
                className={cls.Button__text}>
                {
                    sectionLink
                        ? <a
                            href={sectionLink}
                            style={{
                                color: `${textColor}`
                            }}
                        >
                            {text}
                        </a>
                        : text
                }

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
