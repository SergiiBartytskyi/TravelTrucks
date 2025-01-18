import { Field, Form, Formik } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./BookForm.module.css";
import clsx from "clsx";
import MainButton from "../ui/buttons/MainButton/MainButton";

const initialValues = {
  userName: "",
  email: "",
  selectedDate: null,
  textarea: "",
};

const BookForm = () => {
  const handleSubmit = (values, actions) => {
    console.log("Selected Date:", values.selectedDate);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      // validationSchema={CamperSchema}
    >
      {({ setFieldValue, values }) => (
        <Form>
          <div className={styles.container}>
            <div className={styles.headWrapper}>
              <h2 className={styles.formTitle}>Book your campervan now</h2>
              <p className={styles.formDescription}>
                Stay connected! We are always ready to help you.
              </p>
            </div>
            <div className={styles.form}>
              <Field
                name="userName"
                placeholder="Name*"
                className={styles.input}
              />
              <Field
                name="email"
                placeholder="Email*"
                className={styles.input}
              />
              <DatePicker
                name="selectedDate"
                type="date"
                selected={values.selectedDate}
                placeholderText="Booking date*"
                onChange={(date) => setFieldValue("selectedDate", date)}
                dateFormat="dd-MM-yyyy"
                className={clsx(styles.datePicker, styles.input)}
              />
              <Field
                name="textarea"
                as="textarea"
                placeholder="Comment"
                className={clsx(styles.input, styles.textarea)}
              />
            </div>
            <MainButton className={styles.sendBtn}>Send</MainButton>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default BookForm;
