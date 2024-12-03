import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';

import styles from './PageLoader.module.scss';

export const PageLoader = () => (
    <div className={classNames(styles.loader)}>
        <Loader />
    </div>
);
