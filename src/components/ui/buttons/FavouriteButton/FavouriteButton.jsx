import clsx from "clsx";
import Icon from "../../icons/Icon/Icon";
import Button from "../Button/Button";
import styles from "./FavouriteButton.module.css";

const FavouriteButton = (props) => {
  const { ...rest } = props;
  const isFavourite = false;

  return (
    <Button className={styles.btn} {...rest}>
      <Icon
        iconId="heart"
        width={24}
        height={24}
        className={clsx(isFavourite ? styles.iconFavourite : styles.iconBase)}
      />
    </Button>
  );
};

export default FavouriteButton;
