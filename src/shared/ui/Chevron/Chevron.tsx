import { type Mods, classNames } from 'shared/lib/classNames/classNames';
import { memo, useState, useEffect } from 'react';
import cls from './Chevron.module.scss';
import icon from 'shared/assets/images/chevron.png';

export const Chevron = memo(() => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY;
            const threshold = 450;

            setIsVisible(scrolled > threshold);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const mods: Mods = {
        [cls.Chevron__visible]: isVisible
    }

    return (
        <div className={classNames(cls.Chevron, mods, [])}>
            <a href="/#header">
                <img src={icon} alt="chevron" />
            </a>
        </div>
    );
});

Chevron.displayName = 'Chevron';
