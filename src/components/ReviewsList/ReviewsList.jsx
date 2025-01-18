import { useSelector } from "react-redux";
import { selectCamper } from "../../redux/campers/selectors";
import ReviewItem from "../ReviewItem/ReviewItem";
import styles from "./ReviewsList.module.css";

const ReviewsList = () => {
  const { reviews } = useSelector(selectCamper);
  return (
    <ul className={styles.reviewsList}>
      {reviews.map((review, index) => (
        <li key={index}>
          <ReviewItem review={review} />
        </li>
      ))}
    </ul>
  );
};

export default ReviewsList;
