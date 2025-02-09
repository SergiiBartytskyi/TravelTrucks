import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import styles from "./AppBar.module.css";

const AppBar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo className={styles.logo} />
        <Navigation className={styles.nav} />
      </div>
    </header>
  );
};

export default AppBar;
