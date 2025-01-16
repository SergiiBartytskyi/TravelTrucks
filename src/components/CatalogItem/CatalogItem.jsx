import CamperFeatures from "../CamperFeatures/CamperFeatures";
import InfoCard from "../InfoCard/InfoCard";
import FavouriteButton from "../ui/buttons/FavouriteButton/FavouriteButton";
import MainButton from "../ui/buttons/MainButton/MainButton";
import styles from "./CatalogItem.module.css";

const CatalogItem = ({ camper }) => {
  const { id, name, price, rating, location, description, gallery, reviews } =
    camper;

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
                  .replace(/,/g, " ")}
              </p>
              <FavouriteButton id={id} />
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
          <CamperFeatures camper={entries} />
        </div>
        <MainButton>Show more</MainButton>
      </div>
    </div>
  );
};

export default CatalogItem;
