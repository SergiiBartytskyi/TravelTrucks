import Icon from "../Icon/Icon";
import styles from "./CategoryIcon.module.css";

const CategoryIcon = ({ category }) => {
  const engineCategories = ["petrol", "hybrid", "diesel"];
  const iconCategory = engineCategories.includes(category)
    ? "engine"
    : category;

  return (
    <div className={styles.categoryWrapper}>
      <Icon iconId={iconCategory} />
      <p className={styles.text}>{category}</p>
    </div>
  );
};

export default CategoryIcon;
