import Button from "../Button/Button";
import clsx from "clsx";
import styles from "./MainButton.module.css";

const MainButton = (props) => {
  const { children, className, ...rest } = props;

  return (
    <Button className={clsx(styles.btn, className)} {...rest}>
      {children}
    </Button>
  );
};
export default MainButton;
