import styles from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <p className={styles.errorText}>
      Whoops, something went wrong! Please try to clarify the request!
    </p>
  );
};
export default ErrorMessage;
