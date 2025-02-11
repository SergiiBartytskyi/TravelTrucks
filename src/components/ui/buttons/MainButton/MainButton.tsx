import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import Button from "../Button/Button";
import clsx from "clsx";
import styles from "./MainButton.module.css";

type MainButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  children: ReactNode;
};

const MainButton: FC<MainButtonProps> = ({ children, className, ...rest }) => {
  return (
    <Button className={clsx(styles.btn, className)} {...rest}>
      {children}
    </Button>
  );
};
export default MainButton;
