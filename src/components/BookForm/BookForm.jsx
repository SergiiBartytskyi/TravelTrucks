import { Field, Form, Formik, ErrorMessage } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as Yup from "yup";
import MainButton from "../ui/buttons/MainButton/MainButton";
import Loader from "../Loader/Loader";
import { useSelector } from "react-redux";
import { selectError, selectLoading } from "../../redux/campers/selectors";
import toast, { Toaster } from "react-hot-toast";
import clsx from "clsx";
import styles from "./BookForm.module.css";

const BookSchema = Yup.object().shape({
  userName: Yup.string()
    .min(2, "Name must be at least 2 characters long")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  selectedDate: Yup.date().nullable().required("Booking date is required"),
  textarea: Yup.string().required("Comment is required"),
});
const initialValues = {
  userName: "",
  email: "",
  selectedDate: null,
  textarea: "",
};

const BookForm = () => {
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const handleSubmit = (_, actions) => {
    toast.success("Successfully booking!");
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={BookSchema}
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
              <div className={styles.inputWrapper}>
                <Field
                  name="userName"
                  placeholder="Name*"
                  className={styles.input}
                />
                <ErrorMessage
                  name="userName"
                  component="span"
                  className={styles.error}
                />
              </div>

              <div className={styles.inputWrapper}>
                <Field
                  name="email"
                  placeholder="Email*"
                  className={styles.input}
                />
                <ErrorMessage
                  name="email"
                  component="span"
                  className={styles.error}
                />
              </div>
              <div className={styles.inputWrapper}>
                <DatePicker
                  name="selectedDate"
                  type="date"
                  selected={values.selectedDate}
                  placeholderText="Booking date*"
                  onChange={(date) => setFieldValue("selectedDate", date)}
                  dateFormat="dd-MM-yyyy"
                  className={clsx(styles.datePicker, styles.input)}
                />
                <ErrorMessage
                  name="selectedDate"
                  component="span"
                  className={styles.error}
                />
              </div>
              <div className={styles.inputWrapper}>
                <Field
                  name="textarea"
                  as="textarea"
                  placeholder="Comment"
                  className={clsx(styles.input, styles.textarea)}
                />
                <ErrorMessage
                  name="textarea"
                  component="span"
                  className={styles.error}
                />
              </div>
            </div>
            <MainButton className={styles.sendBtn} type="submit">
              Send
            </MainButton>
            {isLoading && <Loader />}
            {error && <ErrorMessage />}
            <Toaster />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default BookForm;
