import { useNavigate } from "react-router";
import MainButton from "../../components/ui/buttons/MainButton/MainButton";
import styles from "./HomePage.module.css";

const HomePage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/catalog");
  };

  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <h1 className={styles.title}>Campers of your dreams</h1>
            <p className={styles.text}>
              You can find everything you want in our catalog
            </p>

            <MainButton handleClick={handleClick}>View Now</MainButton>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
