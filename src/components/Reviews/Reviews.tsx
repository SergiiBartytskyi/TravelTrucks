import BookForm from "../BookForm/BookForm";
import ReviewsList from "../ReviewsList/ReviewsList";
import styles from "./Reviews.module.css";

const Reviews = () => {
  return (
    <div className={styles.container}>
      <div className={styles.reviewsWrapper}>
        <ReviewsList />
      </div>
      <div className={styles.formWrapper}>
        <BookForm />
      </div>
    </div>
  );
};

export default Reviews;
