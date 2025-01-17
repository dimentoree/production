import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';

import styles from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const { to, className, children, theme = AppLinkTheme.PRIMARY, ...otherProps } = props;

    return (
        <Link
            to={to}
            className={classNames(styles.link, {}, [className, styles[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
