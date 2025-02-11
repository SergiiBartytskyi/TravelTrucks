import { ButtonHTMLAttributes, FC } from "react";
import Button from "../Button/Button";
import styles from "./LoadMoreButton.module.css";

type LoadMoreButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const LoadMoreButton: FC<LoadMoreButtonProps> = (props) => {
  const { ...rest } = props;

  return (
    <Button className={styles.btn} {...rest}>
      Load more
    </Button>
  );
};
export default LoadMoreButton;
