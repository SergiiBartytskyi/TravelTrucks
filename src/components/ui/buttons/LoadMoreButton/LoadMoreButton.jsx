import Button from "../Button/Button";
import styles from "./LoadMoreButton.module.css";

const LoadMoreButton = (props) => {
  const { ...rest } = props;

  return (
    <Button className={styles.btn} {...rest}>
      Load more
    </Button>
  );
};
export default LoadMoreButton;
