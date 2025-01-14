import clsx from "clsx";
import styles from "./Button.module.css";

const Button = (props) => {
  const { className, handleClick, children, ...rest } = props;

  return (
    <button
      className={clsx(styles.btn, className)}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
