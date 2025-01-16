import { ErrorMessage, Field, Form, Formik } from "formik";
import MainButton from "../ui/buttons/MainButton/MainButton";
import styles from "./SideBar.module.css";
import Icon from "../ui/icons/Icon/Icon";
import { useState } from "react";
import clsx from "clsx";

const SideBar = () => {
  const [check, setCheck] = useState(false);
  const toogle = () => {
    setCheck(!check);
    console.log("check :>> ", check);
  };
  return (
    <>
      <Formik
        initialValues={{ location: "", vehicleEquipment: [], vehicleType: "" }}
        onSubmit={() => {
          console.log("Form submit");
        }}
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
              <Icon className={styles.icon} iconId="iconMap" />
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
                  className={clsx(styles.filterItem, check && styles.checked)}
                >
                  <Icon className={styles.filtersIcon} iconId="iconWind" />
                  <Field
                    type="checkbox"
                    name="equipment"
                    checked={check}
                    value="AC"
                    className={styles.visuallyHidden}
                    onChange={toogle}
                  />
                  AC
                </label>
                <label
                  className={clsx(styles.filterItem, check && styles.checked)}
                >
                  <Icon className={styles.filtersIcon} iconId="iconDiagram" />
                  <Field
                    type="checkbox"
                    name="equipment"
                    checked={check}
                    value="Automatic"
                    className={styles.visuallyHidden}
                    onChange={toogle}
                  />
                  Automatic
                </label>
                <label
                  className={clsx(styles.filterItem, check && styles.checked)}
                >
                  <Icon className={styles.filtersIcon} iconId="iconCupHot" />
                  <Field
                    type="checkbox"
                    name="equipment"
                    checked={check}
                    value="Kitchen"
                    className={styles.visuallyHidden}
                    onChange={toogle}
                  />
                  Kitchen
                </label>
                <label
                  className={clsx(styles.filterItem, check && styles.checked)}
                >
                  <Icon className={styles.filtersIcon} iconId="iconTv" />
                  <Field
                    type="checkbox"
                    name="equipment"
                    checked={check}
                    value="TV"
                    className={styles.visuallyHidden}
                    onChange={toogle}
                  />
                  TV
                </label>
                <label
                  className={clsx(styles.filterItem, check && styles.checked)}
                >
                  <Icon className={styles.filtersIcon} iconId="iconPh_shower" />
                  <Field
                    type="checkbox"
                    name="equipment"
                    checked={check}
                    value="Bathroom"
                    className={styles.visuallyHidden}
                    onChange={toogle}
                  />
                  Bathroom
                </label>
              </div>
            </div>

            <div className={styles.filtersWrapper}>
              <p className={styles.filtersType}>Vehicle typefiltersType</p>
              <div className={styles.line}></div>
              <div className={styles.filtersList}>
                <label
                  className={clsx(styles.filterItem, check && styles.checked)}
                >
                  <Icon
                    className={styles.filtersIcon}
                    iconId="iconBi_grid_1x2"
                  />
                  <Field
                    type="checkbox"
                    name="equipment"
                    checked={check}
                    value="Van"
                    className={styles.visuallyHidden}
                    onChange={toogle}
                  />
                  Van
                </label>
                <label
                  className={clsx(styles.filterItem, check && styles.checked)}
                >
                  <Icon className={styles.filtersIcon} iconId="iconBi_grid" />
                  <Field
                    type="checkbox"
                    name="equipment"
                    checked={check}
                    value="Fully Integrated"
                    className={styles.visuallyHidden}
                    onChange={toogle}
                  />
                  Fully Integrated
                </label>
                <label
                  className={clsx(styles.filterItem, check && styles.checked)}
                >
                  <Icon
                    className={styles.filtersIcon}
                    iconId="iconBi_grid_3x3_gap"
                  />
                  <Field
                    type="checkbox"
                    name="equipment"
                    checked={check}
                    value="Alcove"
                    className={styles.visuallyHidden}
                    onChange={toogle}
                  />
                  Alcove
                </label>
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
