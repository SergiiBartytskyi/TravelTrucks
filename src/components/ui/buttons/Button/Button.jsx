import clsx from "clsx";
import styles from "./Button.module.css";

const Button = (props) => {
  const { className, children, ...rest } = props;

  return (
    <button className={clsx(styles.btn, className)} {...rest}>
      {children}
    </button>
  );
};

export default Button;
