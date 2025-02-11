import { useAppSelector } from "../../redux/hooks";
import { selectCamper } from "../../redux/campers/selectors";
import ReviewItem from "../ReviewItem/ReviewItem";
import styles from "./ReviewsList.module.css";

const ReviewsList = () => {
  const camper = useAppSelector(selectCamper);

  if (!camper || !camper.reviews) {
    return <div>No reviews available</div>;
  }

  return (
    <ul className={styles.reviewsList}>
      {camper.reviews.map((review, index) => (
        <li key={index}>
          <ReviewItem review={review} />
        </li>
      ))}
    </ul>
  );
};

export default ReviewsList;
