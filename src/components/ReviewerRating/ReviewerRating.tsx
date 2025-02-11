import Icon from "../ui/icons/Icon/Icon";
import clsx from "clsx";
import styles from "./ReviewerRating.module.css";

type ReviewerRatingProps = {
  rating: number;
};

const ReviewerRating = ({ rating }: ReviewerRatingProps) => {
  const clampedRating = Math.min(Math.max(rating, 0), 5);
  return (
    <ul className={styles.ratingList}>
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <li key={index} className={styles.ratingItem}>
            <Icon
              iconId="star"
              className={clsx(styles.icon, {
                [styles.iconGold]: index < clampedRating,
              })}
            />
          </li>
        ))}
    </ul>
  );
};

export default ReviewerRating;
