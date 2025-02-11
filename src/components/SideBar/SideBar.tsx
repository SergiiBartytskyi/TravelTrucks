import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import MainButton from "../ui/buttons/MainButton/MainButton";
import Icon from "../ui/icons/Icon/Icon";
import * as Yup from "yup";
import { resetCampers } from "../../redux/campers/slice";
import { resetFilter, setUrl } from "../../redux/filters/slice";
import { useSearchParams } from "react-router";
import clsx from "clsx";
import styles from "./SideBar.module.css";
import { InitialValuesProps } from "./SideBar.types";
import { useAppDispatch } from "../../redux/hooks";

const CamperSchema = Yup.object().shape({
  location: Yup.string(),
  equipments: Yup.array(),
  form: Yup.string().oneOf(["panelTruck", "fullyIntegrated", "alcove"]),
});

const initialValues: InitialValuesProps = {
  location: "",
  equipments: [],
  form: "",
};

const SideBar = () => {
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = (
    values: InitialValuesProps,
    actions: FormikHelpers<InitialValuesProps>
  ) => {
    dispatch(resetCampers());
    dispatch(resetFilter());
    searchParams.forEach((_, key) => searchParams.delete(key));

    if (values.location) {
      searchParams.set("location", values.location);
    }

    if (values.equipments?.length) {
      values.equipments.forEach((equipment) => {
        const value: string =
          equipment === "transmission" ? "automatic" : "true";
        searchParams.set(equipment, value);
      });
    } else {
      ["AC", "transmission", "kitchen", "TV", "bathroom"].forEach((key) =>
        searchParams.delete(key)
      );
    }

    if (values.form) {
      searchParams.set("form", values.form);
    }

    setSearchParams(searchParams);
    dispatch(setUrl(searchParams.toString()));

    actions.resetForm();
  };

  return (
    <aside>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={CamperSchema}
      >
        {({ values }) => (
          <Form className={styles.container}>
            <div className={styles.groupWrapper}>
              <label htmlFor="location" className={styles.inputLabel}>
                Location
              </label>
              <div className={styles.inputWrapper}>
                <Field
                  type="text"
                  name="location"
                  id="location"
                  className={styles.location}
                  placeholder="City"
                />
                <Icon className={styles.icon} iconId="map" />
                <ErrorMessage
                  name="location"
                  component="span"
                  className={styles.error}
                />
              </div>
            </div>

            <div className={styles.filters}>
              <p className={styles.text}>Filters</p>

              <div className={styles.filtersWrapper}>
                <p className={styles.filtersType}>Vehicle equipment</p>
                <div className={styles.line}></div>
                <div
                  className={styles.filtersList}
                  aria-labelledby="checkbox-group"
                >
                  <label
                    className={clsx(styles.filterItem, {
                      [styles.active]: values.equipments.includes("AC"),
                    })}
                  >
                    <Icon className={styles.filtersIcon} iconId="AC" />
                    <Field
                      type="checkbox"
                      name="equipments"
                      value="AC"
                      className={styles.visuallyHidden}
                    />
                    AC
                  </label>
                  <label
                    className={clsx(styles.filterItem, {
                      [styles.active]:
                        values.equipments.includes("transmission"),
                    })}
                  >
                    <Icon
                      className={styles.filtersIcon}
                      iconId="transmission"
                    />
                    <Field
                      type="checkbox"
                      name="equipments"
                      value="transmission"
                      className={styles.visuallyHidden}
                    />
                    Automatic
                  </label>
                  <label
                    className={clsx(styles.filterItem, {
                      [styles.active]: values.equipments.includes("kitchen"),
                    })}
                  >
                    <Icon className={styles.filtersIcon} iconId="kitchen" />
                    <Field
                      type="checkbox"
                      name="equipments"
                      value="kitchen"
                      className={styles.visuallyHidden}
                    />
                    Kitchen
                  </label>
                  <label
                    className={clsx(styles.filterItem, {
                      [styles.active]: values.equipments.includes("TV"),
                    })}
                  >
                    <Icon className={styles.filtersIcon} iconId="TV" />
                    <Field
                      type="checkbox"
                      name="equipments"
                      value="TV"
                      className={styles.visuallyHidden}
                    />
                    TV
                  </label>
                  <label
                    className={clsx(styles.filterItem, {
                      [styles.active]: values.equipments.includes("bathroom"),
                    })}
                  >
                    <Icon className={styles.filtersIcon} iconId="bathroom" />
                    <Field
                      type="checkbox"
                      name="equipments"
                      value="bathroom"
                      className={styles.visuallyHidden}
                    />
                    Bathroom
                  </label>
                  <ErrorMessage
                    name="vehicleEquipment"
                    component="span"
                    className={styles.error}
                  />
                </div>
              </div>

              <div className={styles.filtersWrapper}>
                <p className={styles.filtersType}>Vehicle Type</p>
                <div className={styles.line}></div>
                <div className={styles.filtersList}>
                  <label
                    className={clsx(styles.filterItem, {
                      [styles.active]: values.form === "panelTruck",
                    })}
                  >
                    <Icon className={styles.filtersIcon} iconId="van" />
                    <Field
                      type="radio"
                      name="form"
                      value="panelTruck"
                      className={styles.visuallyHidden}
                    />
                    Van
                  </label>
                  <label
                    className={clsx(styles.filterItem, {
                      [styles.active]: values.form === "fullyIntegrated",
                    })}
                  >
                    <Icon
                      className={styles.filtersIcon}
                      iconId="fullyIntegrated"
                    />
                    <Field
                      type="radio"
                      name="form"
                      value="fullyIntegrated"
                      className={styles.visuallyHidden}
                    />
                    Fully Integrated
                  </label>
                  <label
                    className={clsx(styles.filterItem, {
                      [styles.active]: values.form === "alcove",
                    })}
                  >
                    <Icon className={styles.filtersIcon} iconId="alcove" />
                    <Field
                      type="radio"
                      name="form"
                      value="alcove"
                      className={clsx(styles.visuallyHidden, {
                        [styles.active]: true,
                      })}
                    />
                    Alcove
                  </label>
                  <ErrorMessage
                    name="form"
                    component="span"
                    className={styles.error}
                  />
                </div>
              </div>
            </div>
            <MainButton type="submit">Search</MainButton>
          </Form>
        )}
      </Formik>
    </aside>
  );
};

export default SideBar;
