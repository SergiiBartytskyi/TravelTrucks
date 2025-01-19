import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet, useParams } from "react-router";
import {
  selectCamper,
  selectError,
  selectLoading,
} from "../../redux/campers/selectors";
import { Suspense, useEffect } from "react";
import { getCamperDetails } from "../../redux/campers/operations";
import { resetCamper } from "../../redux/campers/slice";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import styles from "./CamperDetailPage.module.css";
import InfoCard from "../../components/InfoCard/InfoCard";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(styles.link, isActive && styles.active);
};

const CamperDetailPage = () => {
  const { id } = useParams();
  const camper = useSelector(selectCamper);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  const parseId = parseInt(id);

  useEffect(() => {
    dispatch(resetCamper());
    dispatch(getCamperDetails(parseId));
  }, [dispatch, parseId]);

  if (!camper) {
    return <Loader />;
  }

  const { name, rating, reviews, location, price, gallery, description } =
    camper;

  return (
    <>
      <div className={styles.section}>
        <div className={styles.container}>
          <div className={styles.mainWrapper}>
            <div className={styles.mainInfo}>
              <h2 className={styles.title}>{name}</h2>
              <InfoCard
                rating={rating}
                reviews={reviews.length}
                location={location}
                className={styles.infocard}
              />
              <p className={styles.price}>
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "EUR",
                })
                  .format(price)
                  .replace(/,/g, "")}
              </p>
            </div>

            <ul className={styles.gallery}>
              {gallery.map((img, index) => (
                <li key={index} className={styles.imgWrapper}>
                  <img
                    src={img.thumb}
                    alt={`Image ${index + 1}`}
                    width="292"
                    height="312"
                    className={styles.img}
                  />
                </li>
              ))}
            </ul>

            <div className={styles.description}>
              <p className={styles.text}>{description}</p>
            </div>
          </div>

          <div className={styles.detailsWrapper}>
            <div className={styles.subInfo}>
              <ul className={styles.addInfo}>
                <li className={styles.addInfoLink}>
                  <NavLink to="features" className={buildLinkClass}>
                    Features
                  </NavLink>
                </li>
                <li>
                  <NavLink to="reviews" className={buildLinkClass}>
                    Reviews
                  </NavLink>
                </li>
              </ul>

              <div className={styles.line}></div>
            </div>
            {isLoading && <Loader />}
            {error && <ErrorMessage />}
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
};

export default CamperDetailPage;
