import { Link } from "react-router";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <h1 className={styles.title}>Campers of your dreams</h1>
            <p className={styles.text}>
              You can find everything you want in our catalog
            </p>

            <Link to="/catalog" className={styles.link}>
              View Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
