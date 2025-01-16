import Icon from "../Icon/Icon";
import styles from "./CategoryIcon.module.css";

const CategoryIcon = ({ category }) => {
  return (
    <div className={styles.categoryWrapper}>
      <Icon iconId={category} />
      <p className={styles.text}>{category}</p>
    </div>
  );
};

export default CategoryIcon;
