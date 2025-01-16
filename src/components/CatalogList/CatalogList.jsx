import testCampers from "../../testCampers.json";
import CatalogItem from "../CatalogItem/CatalogItem";
import styles from "./CatalogList.module.css";

const CatalogList = () => {
  // console.log("testCampers :>> ", testCampers);
  const campers = testCampers.items;
  // console.log("campers :>> ", campers);
  return (
    <ul className={styles.catalogList}>
      {campers.map((camper) => (
        <li key={camper.id} className={styles.catalogItem}>
          <CatalogItem camper={camper} />
        </li>
      ))}
    </ul>
  );
};

export default CatalogList;
