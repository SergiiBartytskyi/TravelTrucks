import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import CamperFeatures from "../CamperFeatures/CamperFeatures";
import InfoCard from "../InfoCard/InfoCard";
import FavoriteButton from "../ui/buttons/FavoriteButton/FavoriteButton";
import { Link } from "react-router";
import { selectFavorites } from "../../redux/favorites/selectors";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../redux/favorites/slice";
import styles from "./CatalogItem.module.css";
import { FC } from "react";
import { Camper } from "../../redux/types";

type CamperProps = {
  camper: Camper;
};

const CatalogItem: FC<CamperProps> = ({ camper }) => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(selectFavorites);
  const { id, name, price, rating, location, description, gallery, reviews } =
    camper;

  const isFavorite = favorites.includes(id);
  const handleFavoriteClick = (): void => {
    if (isFavorite) {
      dispatch(removeFromFavorites(id));
    } else {
      dispatch(addToFavorites(id));
    }
  };

  const entries = Object.entries(camper);

  return (
    <div className={styles.container}>
      <div className={styles.camperImageWrapper}>
        <img
          src={gallery[0].thumb}
          alt={name}
          width={292}
          height={320}
          className={styles.camperImage}
        />
      </div>
      <div className={styles.camperInfoWrapper}>
        <div className={styles.mainInfo}>
          <div className={styles.camperTitleWrapper}>
            <p className={styles.title}>{name}</p>
            <div className={styles.camperPrice}>
              <p>
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "EUR",
                })
                  .format(price)
                  .replace(/,/g, "")}
              </p>
              <FavoriteButton
                isFavorite={isFavorite}
                onClick={handleFavoriteClick}
              />
            </div>
          </div>

          <InfoCard
            rating={rating}
            reviews={reviews.length}
            location={location}
            className={styles.infoCard}
          />
        </div>
        <div className={styles.descriptionWrapper}>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.categoiresList}>
          <CamperFeatures camperEntries={entries} />
        </div>
        <Link to={`/catalog/${id}`} className={styles.link}>
          Show more
        </Link>
      </div>
    </div>
  );
};

export default CatalogItem;
