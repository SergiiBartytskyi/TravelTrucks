import { useSelector } from "react-redux";
import { selectCamper } from "../../redux/campers/selectors";
import CamperFeatures from "../CamperFeatures/CamperFeatures";
import { formatCamperData } from "../../helpers/formatCamperData";
import BookForm from "../BookForm/BookForm";
import styles from "./Features.module.css";

const Features = () => {
  const camper = useSelector(selectCamper);

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
          <ul className={styles.detailsInfo}>
            <li className={styles.detailsPoint}>
              <p>Form</p>
              <p>{formatCamper.form}</p>
            </li>
            <li className={styles.detailsPoint}>
              <p>Length</p>
              <p>{formatCamper.length}</p>
            </li>
            <li className={styles.detailsPoint}>
              <p>Width</p>
              <p>{formatCamper.width}</p>
            </li>
            <li className={styles.detailsPoint}>
              <p>Height</p>
              <p>{formatCamper.height}</p>
            </li>
            <li className={styles.detailsPoint}>
              <p>Tank</p>
              <p>{formatCamper.tank}</p>
            </li>
            <li className={styles.detailsPoint}>
              <p>Consumption</p>
              <p>{formatCamper.consumption}</p>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.formWrapper}>
        <BookForm />
      </div>
    </div>
  );
};

export default Features;
