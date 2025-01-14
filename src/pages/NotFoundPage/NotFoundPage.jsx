import { Link } from "react-router";
import styles from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <Link to="/">Back to Home</Link>
      <h1>404 | Page not found!</h1>
    </div>
  );
};

export default NotFoundPage;
