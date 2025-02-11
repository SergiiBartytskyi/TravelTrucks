import { Outlet } from "react-router";
import AppBar from "../AppBar/AppBar";
import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <>
      <AppBar />
      <main className={styles.container}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
