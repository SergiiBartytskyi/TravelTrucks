import styles from "./Features.module.css";
import { useSelector } from "react-redux";
import {
  selectCamper,
  selectError,
  selectLoading,
} from "../../redux/campers/selectors";
import CamperFeatures from "../CamperFeatures/CamperFeatures";
import { formatCamperData } from "../../helpers/formatCamperData";
import BookForm from "../BookForm/BookForm";

const Features = () => {
  const camper = useSelector(selectCamper);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const formatCamper = formatCamperData(camper);
  const entries = Object.entries(formatCamper);
  return (
    <div className={styles.container}>
      <div className={styles.featuresWrapper}>
        <div className={styles.features}>
          <CamperFeatures camper={entries} />
        </div>
        <div className={styles.details}>
          <h3 className={styles.detailsTitle}>Vehicle details</h3>
          <div className={styles.line}></div>
          <div className={styles.detailsInfo}>
            <div className={styles.detailsPoint}>
              <p>Form</p>
              <p>{formatCamper.form}</p>
            </div>
            <div className={styles.detailsPoint}>
              <p>Length</p>
              <p>{formatCamper.length}</p>
            </div>
            <div className={styles.detailsPoint}>
              <p>Width</p>
              <p>{formatCamper.width}</p>
            </div>
            <div className={styles.detailsPoint}>
              <p>Height</p>
              <p>{formatCamper.height}</p>
            </div>
            <div className={styles.detailsPoint}>
              <p>Tank</p>
              <p>{formatCamper.tank}</p>
            </div>
            <div className={styles.detailsPoint}>
              <p>Consumption</p>
              <p>{formatCamper.consumption}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.formWrapper}>
        <BookForm />
      </div>
    </div>
  );
};

export default Features;
