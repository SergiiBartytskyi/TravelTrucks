import { Review } from "../../redux/types";
import ReviewerRating from "../ReviewerRating/ReviewerRating";
import styles from "./ReviewItem.module.css";

type ReviewItemProps = {
  review: Review;
};

const ReviewItem = ({
  review: { reviewer_name, reviewer_rating, comment },
}: ReviewItemProps) => {
  const reviewerLogo = reviewer_name.charAt(0).toUpperCase();

  return (
    <div className={styles.container}>
      <div className={styles.reviewerWrapper}>
        <div className={styles.reviewsLogo}>
          <span>{reviewerLogo}</span>
        </div>

        <div className={styles.reviewerName_Rat}>
          <p className={styles.reviewerName}>{reviewer_name}</p>
          <ReviewerRating rating={reviewer_rating} />
        </div>
      </div>
      <p className={styles.text}>{comment}</p>
    </div>
  );
};

export default ReviewItem;
