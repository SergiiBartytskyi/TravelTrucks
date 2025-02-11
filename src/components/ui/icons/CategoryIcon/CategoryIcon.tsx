import Icon from "../Icon/Icon";
import { formatCategory } from "../../../../helpers/formatCategories";
import styles from "./CategoryIcon.module.css";

type CategoryIconProps = {
  category: string;
};

const CategoryIcon = ({ category }: CategoryIconProps) => {
  const iconCategory = formatCategory(category);

  return (
    <div className={styles.categoryWrapper}>
      <Icon iconId={iconCategory} />
      <p className={styles.text}>{category}</p>
    </div>
  );
};

export default CategoryIcon;
