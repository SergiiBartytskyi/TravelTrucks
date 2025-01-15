import SideBar from "../../components/SideBar/SideBar";
import styles from "./CatalogPage.module.css";

const CatalogPage = () => {
  return (
    <>
      <div className={styles.section}>
        <div className={styles.container}>
          <SideBar />
        </div>
      </div>
    </>
  );
};

export default CatalogPage;
