import InfoCard from "../InfoCard/InfoCard";
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
        <img src={gallery[0].thumb} alt={name} />
      </div>
      <div className={styles.camperInfoWrapper}>
        <div className={styles.camperTitleWrapper}>
          <p>{name}</p>
          <div className={styles.camperPrice}>
            <p>{price}</p>
            <div>
              <input
                type="checkbox"
                name="favorite"
                checked={true}
                value="true"
                className={styles.visuallyHidden}
                onChange={() => {}}
              />
              <label>
                <Icon className={styles.icon} iconId="iconHeart" />
              </label>
            </div>
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
