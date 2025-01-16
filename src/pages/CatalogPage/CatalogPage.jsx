import CatalogList from "../../components/CatalogList/CatalogList";
import SideBar from "../../components/SideBar/SideBar";
import styles from "./CatalogPage.module.css";

const CatalogPage = () => {
  return (
    <>
      <div className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sideBarWrapper}>
            <SideBar />
          </div>
          <div className={styles.catalogWrapper}>
            <CatalogList />
          </div>
        </div>
      </div>
    </>
  );
};

export default CatalogPage;
