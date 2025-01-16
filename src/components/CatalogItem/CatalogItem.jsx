import InfoCard from "../InfoCard/InfoCard";
import FavouriteButton from "../ui/buttons/FavouriteButton/FavouriteButton";
import Icon from "../ui/icons/Icon/Icon";
import styles from "./CatalogItem.module.css";

const CatalogItem = ({ camper }) => {
  const {
    id,
    name,
    price,
    rating,
    location,
    description,
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
    gallery,
    reviews,
  } = camper;

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
        <div className={styles.camperTitleWrapper}>
          <p>{name}</p>
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
        />
      </div>
    </div>
  );
};

export default CatalogItem;
