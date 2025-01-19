import Icon from "../../icons/Icon/Icon";
import Button from "../Button/Button";
import clsx from "clsx";
import styles from "./FavoriteButton.module.css";

const FavoriteButton = (props) => {
  const { isFavorite, ...rest } = props;

  return (
    <Button className={styles.btn} {...rest}>
      <Icon
        iconId="heart"
        width={24}
        height={24}
        className={clsx(isFavorite ? styles.iconFavorite : styles.iconBase)}
      />
    </Button>
  );
};

export default FavoriteButton;
