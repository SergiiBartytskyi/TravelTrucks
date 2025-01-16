import { ErrorMessage, Field, Form, Formik } from "formik";
import MainButton from "../ui/buttons/MainButton/MainButton";
import styles from "./SideBar.module.css";
import Icon from "../ui/icons/Icon/Icon";
import clsx from "clsx";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { getCampers } from "../../redux/campers/operations";

const CamperSchema = Yup.object().shape({
  location: Yup.string(),
  vehicleEquipment: Yup.array(),
  form: Yup.string().oneOf(["panelTruck", "fullyIntegrated", "alcove"]),
});

const initialValues = { location: "", vehicleEquipment: [], form: "" };

const SideBar = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const filters = {
      location: values.location,
      vehicleEquipment: values.vehicleEquipment,
      form: values.form,
    };
    const pagination = { page: 1, limit: 10 };

    dispatch(getCampers({ filters, pagination }));
    console.log("Filters submitted: ", filters);

    actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
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
                    name="form"
                    // checked={check}
                    value="panelTruck"
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
                    name="form"
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
                    name="form"
                    // checked={vehicleType === "alcove"}
                    value="alcove"
                    className={styles.visuallyHidden}
                    // onChange={handleSelect}
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
      </Formik>
    </>
  );
};

export default SideBar;
