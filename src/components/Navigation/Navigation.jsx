import { NavLink } from "react-router";
import clsx from "clsx";
import styles from "./Navigation.module.css";

const getNavLinkClass = (props) => {
  return clsx(styles.link, props.isActive && styles.active);
};
const Navigation = ({ className }) => {
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
