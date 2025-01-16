import clsx from "clsx";
import Icon from "../../icons/Icon/Icon";
import styles from "./FavouriteButton.module.css";

const FavouriteButton = (props) => {
  const { ...rest } = props;
  const isFavourite = true;

  return (
    <button className={styles.btn} {...rest}>
      <Icon
        iconId="iconHeart"
        width="24"
        height="24"
        className={clsx(isFavourite ? styles.iconFavourite : styles.iconBase)}
      />
    </button>
  );
};

export default FavouriteButton;
