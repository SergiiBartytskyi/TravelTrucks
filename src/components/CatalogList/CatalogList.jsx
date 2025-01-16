import { useSelector } from "react-redux";
import { selectCampers } from "../../redux/campers/selectors";
// import testCampers from "../../testCampers.json";
import CatalogItem from "../CatalogItem/CatalogItem";
import styles from "./CatalogList.module.css";

const CatalogList = () => {
  const campers = useSelector(selectCampers);
  console.log("campers :>> ", campers);
  // const campers = testCampers.items;
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
