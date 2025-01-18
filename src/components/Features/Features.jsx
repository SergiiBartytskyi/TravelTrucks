import { useParams } from "react-router";
import styles from "./Features.module.css";
import { useSelector } from "react-redux";
import {
  selectCamper,
  selectError,
  selectLoading,
} from "../../redux/campers/selectors";
import CamperFeatures from "../CamperFeatures/CamperFeatures";

const Features = () => {
  const { id } = useParams();
  const camper = useSelector(selectCamper);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const {
    form,
    length,
    width,
    height,
    tank,
    consumption,
    transmission,
    engine,
    AC,
    bathroom,
    kitchen,
    TV,
    radio,
    refrigerator,
    microwave,
    gas,
    water,
  } = camper;

  const entries = Object.entries(camper);
  // const icons = [
  //   transmission,
  //   engine,
  //   AC,
  //   bathroom,
  //   kitchen,
  //   TV,
  //   radio,
  //   refrigerator,
  //   microwave,
  //   gas,
  //   water,
  // ];

  console.log("camper :>> ", camper);
  return (
    <div className={styles.container}>
      <div className={styles.featuresWrapper}>
        <div className={styles.features}>
          <CamperFeatures camper={entries} />
        </div>
        <div className={styles.details}>
          <h3 className={styles.detailsTitle}>Vehicle details</h3>
          <div className={styles.detailsInfo}></div>
        </div>
      </div>
      <div className={styles.formWrapper}></div>
    </div>
  );
};

export default Features;
