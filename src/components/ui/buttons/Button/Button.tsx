import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import clsx from "clsx";
import styles from "./Button.module.css";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  children: ReactNode;
};

const Button: FC<ButtonProps> = ({ className, children, ...rest }) => {
  return (
    <button className={clsx(styles.btn, className)} {...rest}>
      {children}
    </button>
  );
};

export default Button;
