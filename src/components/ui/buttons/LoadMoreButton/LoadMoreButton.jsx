import Button from "../Button/Button";
import styles from "./LoadMoreButton.module.css";

const LoadMoreButton = (props) => {
  const { children, ...rest } = props;

  return (
    <Button className={styles.btn} {...rest}>
      {children}
    </Button>
  );
};
export default LoadMoreButton;
