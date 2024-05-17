import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import { addContact } from "../../redux/contactsOps";
import css from "./ContactForm.module.css";

const ContactsSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
  number: Yup.string()
    .min(2, "Too short!")
    .max(10, "Too long!")
    .required("Required"),
});

const initialValues = {
  name: "",
  number: "",
};

export default function ContactForm() {
  const nameFieldId = useId();
  const phoneFieldId = useId();

  const dispatch = useDispatch();

  const handleAddContact = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleAddContact}
      validationSchema={ContactsSchema}
    >
      <Form className={css.form}>
        <div className={css.formItem}>
          <label className={css.formLabel} htmlFor={nameFieldId}>
            Name
          </label>
          <Field
            className={css.formField}
            type="text"
            name="name"
            htmlFor={nameFieldId}
          />
          <ErrorMessage
            className={css.errorMessage}
            name="name"
            component="span"
          />
        </div>
        <div className={css.formItem}>
          <label className={css.formLabel} htmlFor={phoneFieldId}>
            Number
          </label>
          <Field
            className={css.formField}
            type="text"
            name="number"
            htmlFor={phoneFieldId}
          />
          <ErrorMessage
            className={css.errorMessage}
            name="number"
            component="span"
          />
        </div>
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
