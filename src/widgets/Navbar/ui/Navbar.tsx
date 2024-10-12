import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { classNames } from "shared/lib/classNames/classNames";

import styles from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <ThemeSwitcher />
      <div className={classNames(styles.links)}>
        <AppLink to="/">Главная</AppLink>
        <AppLink to="/about">О сайте</AppLink>
      </div>
    </div>
  );
};
