import ScaleLoader from "react-spinners/ScaleLoader";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <ScaleLoader color="#E44848" />
    </div>
  );
};
export default Loader;
