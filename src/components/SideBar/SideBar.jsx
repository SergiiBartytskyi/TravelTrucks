import { Field, Form, Formik } from "formik";
import MainButton from "../ui/buttons/MainButton/MainButton";
import styles from "./SideBar.module.css";
import MapIcon from "../ui/icons/Icon/Icon";

const SideBar = () => {
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
            <Field
              type="text"
              name="location"
              className={styles.location}
              placeholder="City"
            />
            <MapIcon className={styles.icon} iconId="iconMap" />
          </div>
          <MainButton type="submit">Search</MainButton>
        </Form>
      </Formik>
    </>
  );
};

export default SideBar;
