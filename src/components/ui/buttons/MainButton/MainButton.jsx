import Button from "../Button/Button";
import styles from "./MainButton.module.css";

const MainButton = (props) => {
  const { children, ...rest } = props;

  return (
    <Button className={styles.btn} {...rest}>
      {children}
    </Button>
  );
};
export default MainButton;
