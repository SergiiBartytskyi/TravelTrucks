import { useEffect } from "react";
import CatalogList from "../../components/CatalogList/CatalogList";
import SideBar from "../../components/SideBar/SideBar";
import styles from "./CatalogPage.module.css";
import { useDispatch } from "react-redux";
import { getCampers } from "../../redux/campers/operations";

const CatalogPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCampers());
    console.log("ssss :>> ");
  }, [dispatch]);

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
