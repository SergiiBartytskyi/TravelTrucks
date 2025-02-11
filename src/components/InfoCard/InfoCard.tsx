import Icon from "../ui/icons/Icon/Icon";
import { formatLocation } from "../../helpers/formatLocation";
import clsx from "clsx";
import styles from "./InfoCard.module.css";

type InfoCardProps = {
  rating: number;
  reviews: number;
  location: string;
  className: string;
};

const InfoCard = ({ rating, reviews, location, className }: InfoCardProps) => {
  return (
    <div className={clsx(styles.container, className)}>
      <div className={clsx(styles.infoWrapper, styles.underline)}>
        <Icon iconId="star" className={styles.icon} />
        <p>{`${rating}(${reviews} reviews)`}</p>
      </div>
      <div className={styles.infoWrapper}>
        <Icon iconId="map" className={styles.locationIcon} />
        <p>{formatLocation(location)}</p>
      </div>
    </div>
  );
};

export default InfoCard;
