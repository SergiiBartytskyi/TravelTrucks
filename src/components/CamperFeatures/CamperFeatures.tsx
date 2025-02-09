import { FC } from "react";
import categories from "../../data/categories.json";
import CategoryIcon from "../ui/icons/CategoryIcon/CategoryIcon";
import styles from "./CamperFeatures.module.css";

interface CamperFeaturesProps {
  camper: [string, any][];
}
const CamperFeatures: FC<CamperFeaturesProps> = ({ camper }) => {
  const features = camper.filter(([key, value]) =>
    categories.some((category) => key === category.id && value)
  );

  return (
    <ul className={styles.featuresWrapper}>
      {features.map(([key, value]) => {
        if (key === "transmission" || key === "engine") {
          return (
            <li key={key}>
              <CategoryIcon category={value} />
            </li>
          );
        }

        if (key) {
          return (
            <li key={key}>
              <CategoryIcon category={key} />
            </li>
          );
        }

        return null;
      })}
    </ul>
  );
};

export default CamperFeatures;
