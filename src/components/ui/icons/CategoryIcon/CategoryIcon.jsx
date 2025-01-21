import Icon from "../Icon/Icon";
import { formatCategory } from "../../../../helpers/formatCategories";
import styles from "./CategoryIcon.module.css";

const CategoryIcon = ({ category }) => {
  const iconCategory = formatCategory(category);

  return (
    <div className={styles.categoryWrapper}>
      <Icon iconId={iconCategory} />
      <p className={styles.text}>{category}</p>
    </div>
  );
};

export default CategoryIcon;
