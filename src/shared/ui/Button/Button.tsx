import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import styles from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
    const { children, theme, className, ...otherProps } = props;

    return (
        <button
            className={classNames(styles.button, {}, [className, styles[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
