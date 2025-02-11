import { Link } from "react-router";
import { RiArrowGoBackLine } from "react-icons/ri";
import styles from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <section className={styles.container}>
      <Link to="/" className={styles.link}>
        <RiArrowGoBackLine />
        Back to Home
      </Link>
      <h1 className={styles.title}>404 | Page not found!</h1>
    </section>
  );
};

export default NotFoundPage;
