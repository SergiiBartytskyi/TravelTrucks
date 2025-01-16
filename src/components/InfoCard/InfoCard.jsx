import Icon from "../ui/icons/Icon/Icon";
import { formatLocation } from "../../helpers/formatLocation.js";
import clsx from "clsx";
import styles from "./InfoCard.module.css";

const InfoCard = ({ rating, reviews, location, className }) => {
  return (
    <div className={clsx(styles.container, className)}>
      <div className={styles.infoWrapper}>
        <Icon iconId="star" className={styles.icon} />
        <p>${`${rating}(${reviews} reviews)`}</p>
      </div>
      <div className={styles.infoWrapper}>
        <Icon iconId="map" className={styles.locationIcon} />
        <p>{formatLocation(location)}</p>
      </div>
    </div>
  );
};

export default InfoCard;
