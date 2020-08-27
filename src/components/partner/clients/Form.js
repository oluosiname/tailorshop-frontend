import React from "react";
import { Formik, Form as FormikForm, ErrorMessage } from "formik";
import { string, object, number } from "yup";
import Input from "../../input/Input";

const Form = ({ handleSubmit, fields }) => {
  let clientSchema = object().shape({
    firstName: string().required("Please enter client's first name"),
    lastName: string().required("Please enter client's last name"),
    gender: string(),
    phoneNumber: number()
      .typeError("Phone number should contain only numbers")
      .required("Please enter client's phone number"),
  });
  const onSubmit = (values, { setSubmitting }) => {
    handleSubmit(values).then((r) => {
      console.log(r);
      setSubmitting(false);
    });
  };
  return (
    <Formik
      initialValues={fields}
      onSubmit={onSubmit}
      validationSchema={clientSchema}
      validateOnChange={false}
      validateOnBlur={false}
    >
      {({ isSubmitting, errors, handleChange, values }) => (
        <FormikForm>
          <div className="fieldset m-bottom-5">
            <Input
              name="lastName"
              onChange={handleChange}
              label="Last Name"
              value={values.lastName}
              classNames={errors.lastName ? "error" : ""}
            ></Input>
            <ErrorMessage
              name="lastName"
              component="div"
              className="invalid-feedback"
            />
          </div>
          <div className="fieldset m-bottom-5">
            <Input
              name="firstName"
              onChange={handleChange}
              label="First Name"
              value={values.firstName}
              classNames={errors.firstName ? "error" : ""}
            ></Input>
            <ErrorMessage
              name="firstName"
              component="div"
              className="invalid-feedback"
            />
          </div>
          <div className="fieldset m-bottom-5">
            <Input
              name="phoneNumber"
              onChange={handleChange}
              label="Phone Number"
              value={values.phoneNumber}
              classNames={errors.phoneNumber ? "error" : ""}
            ></Input>
            <ErrorMessage
              name="phoneNumber"
              component="div"
              className="invalid-feedback"
            />
          </div>
          <div className="fieldset m-bottom-5">
            <Input
              name="gender"
              onChange={handleChange}
              label="Gender"
              value={values.gender}
            ></Input>
          </div>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </FormikForm>
      )}
    </Formik>
  );
};

export default Form;
