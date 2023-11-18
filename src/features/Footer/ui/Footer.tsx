import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Footer.module.scss';
import logo from 'shared/assets/images/logo.png';

interface FooterProps {
    className?: string
}

export const Footer = memo((props: FooterProps) => {
    return (
        <div className={classNames(cls.Footer, {}, [])}>
            <img src={logo} alt="logo" />
            <p>Все права защищены</p>
        </div>
    );
});

Footer.displayName = 'Footer';
