import { ErrorMessage, Field, Form, Formik } from "formik";
import MainButton from "../ui/buttons/MainButton/MainButton";
import styles from "./SideBar.module.css";
import Icon from "../ui/icons/Icon/Icon";
import clsx from "clsx";
import * as Yup from "yup";

const CamperSchema = Yup.object().shape({
  location: Yup.string(),
  vehicleEquipment: Yup.array(),
  vehicleType: Yup.string().oneOf(["van", "fullyIntegrated", "alcove"]),
});

const initialValues = { location: "", vehicleEquipment: [], vehicleType: "" };

const SideBar = () => {
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log(
            "Form values: ",
            values.location,
            values.vehicleEquipment,
            values.vehicleType
          );
          actions.resetForm();
        }}
        validationSchema={CamperSchema}
      >
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
                  // className={clsx(styles.filterItem, check && styles.checked)}
                  className={clsx(styles.filterItem)}
                >
                  <Icon className={styles.filtersIcon} iconId="AC" />
                  <Field
                    type="checkbox"
                    name="vehicleEquipment"
                    // checked={check}
                    value="AC"
                    className={styles.visuallyHidden}
                    // onChange={toogle}
                  />
                  AC
                </label>
                <label
                  // className={clsx(styles.filterItem, check && styles.checked)}
                  className={clsx(styles.filterItem)}
                >
                  <Icon className={styles.filtersIcon} iconId="transmission" />
                  <Field
                    type="checkbox"
                    name="vehicleEquipment"
                    // checked={check}
                    value="Automatic"
                    className={styles.visuallyHidden}
                    // onChange={toogle}
                  />
                  Automatic
                </label>
                <label
                  // className={clsx(styles.filterItem, check && styles.checked)}
                  className={clsx(styles.filterItem)}
                >
                  <Icon className={styles.filtersIcon} iconId="kitchen" />
                  <Field
                    type="checkbox"
                    name="vehicleEquipment"
                    // checked={check}
                    value="kitchen"
                    className={styles.visuallyHidden}
                    // onChange={toogle}
                  />
                  Kitchen
                </label>
                <label
                  // className={clsx(styles.filterItem, check && styles.checked)}
                  className={clsx(styles.filterItem)}
                >
                  <Icon className={styles.filtersIcon} iconId="TV" />
                  <Field
                    type="checkbox"
                    name="vehicleEquipment"
                    // checked={check}
                    value="TV"
                    className={styles.visuallyHidden}
                    // onChange={toogle}
                  />
                  TV
                </label>
                <label
                  // className={clsx(styles.filterItem, check && styles.checked)}
                  className={clsx(styles.filterItem)}
                >
                  <Icon className={styles.filtersIcon} iconId="bathroom" />
                  <Field
                    type="checkbox"
                    name="vehicleEquipment"
                    // checked={check}
                    value="bathroom"
                    className={styles.visuallyHidden}
                    // onChange={toogle}
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
                  // className={clsx(styles.filterItem, check && styles.checked)}
                  className={clsx(styles.filterItem)}
                >
                  <Icon className={styles.filtersIcon} iconId="van" />
                  <Field
                    type="radio"
                    name="vehicleType"
                    // checked={check}
                    value="van"
                    className={styles.visuallyHidden}
                    // onChange={handleSelect}
                  />
                  Van
                </label>
                <label
                  // className={clsx(styles.filterItem, check && styles.checked)}
                  className={clsx(styles.filterItem)}
                >
                  <Icon
                    className={styles.filtersIcon}
                    iconId="fullyIntegrated"
                  />
                  <Field
                    type="radio"
                    name="vehicleType"
                    // checked={check}
                    value="fullyIntegrated"
                    className={styles.visuallyHidden}
                    // onChange={handleSelect}
                  />
                  Fully Integrated
                </label>
                <label
                  // className={clsx(styles.filterItem, check && styles.checked)}
                  className={clsx(styles.filterItem)}
                >
                  <Icon className={styles.filtersIcon} iconId="alcove" />
                  <Field
                    type="radio"
                    name="vehicleType"
                    // checked={vehicleType === "alcove"}
                    value="alcove"
                    className={styles.visuallyHidden}
                    // onChange={handleSelect}
                  />
                  Alcove
                </label>
                <ErrorMessage
                  name="vehicleType"
                  component="span"
                  className={styles.error}
                />
              </div>
            </div>
          </div>
          <MainButton type="submit">Search</MainButton>
        </Form>
      </Formik>
    </>
  );
};

export default SideBar;
