import { NavLink } from "react-router";
import clsx from "clsx";
import styles from "./Navigation.module.css";

type NavagationProps = {
  className: string;
};

type GetNavLinkClassProps = {
  isActive: boolean;
};

const getNavLinkClass = ({ isActive }: GetNavLinkClassProps): string => {
  return clsx(styles.link, isActive && styles.active);
};

const Navigation = ({ className }: NavagationProps) => {
  return (
    <nav className={className}>
      <ul className={styles.list}>
        <li>
          <NavLink to="/" className={getNavLinkClass}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/catalog" className={getNavLinkClass}>
            Catalog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
