import categories from "../../data/categories.json";
import CategoryIcon from "../ui/icons/CategoryIcon/CategoryIcon";
import styles from "./CamperFeatures.module.css";

const CamperFeatures = ({ camper }) => {
  const features = camper.filter((entry) =>
    categories.some((category) => entry[0] === category.id && entry[1])
  );

  return (
    <ul className={styles.featuresWrapper}>
      {features.map((feature) => {
        if (feature[0] === "transmission" || feature[0] === "engine") {
          return (
            <li key={feature[0]}>
              <CategoryIcon category={feature[1]} />
            </li>
          );
        }

        if (feature[0]) {
          return (
            <li key={feature[0]}>
              <CategoryIcon category={feature[0]} />
            </li>
          );
        }

        return null;
      })}
    </ul>
  );
};

export default CamperFeatures;
