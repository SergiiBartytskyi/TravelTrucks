import { selectCampers } from "../../redux/campers/selectors";
import CatalogItem from "../CatalogItem/CatalogItem";
import styles from "./CatalogList.module.css";
import { useAppSelector } from "../../redux/hooks";

const CatalogList = () => {
  const campers = useAppSelector(selectCampers);
  return (
    <ul className={styles.catalogList}>
      {campers.map((camper) => (
        <li key={camper.id}>
          <CatalogItem camper={camper} />
        </li>
      ))}
    </ul>
  );
};

export default CatalogList;
