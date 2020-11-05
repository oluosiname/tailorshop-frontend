import React, { useState } from "react";
import { Formik, Form as FormikForm, ErrorMessage } from "formik";
import { object } from "yup";
import Input from "../../input/Input";
import MySelect from "../../MySelect";

const genderOptions = [
  { value: "", label: "Select....", color: "#0052CC", isDisabled: true },
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
];

const Form = ({ handleSubmit, fields, handleCancel, schema }) => {
  const [formErrors, setFormErrors] = useState([]);

  let validationSchema = object().shape(schema);

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    handleSubmit(values)
      .then(() => {
        resetForm();
      })
      .catch((err) => {
        setFormErrors(err.response.data.errors);
        setSubmitting(false);
      });
  };

  const clearForm = () => {
    setFormErrors([]);
    handleCancel();
  };

  const displayFormErrors = () => {
    return (
      <div className="invalid-tooltip">
        {formErrors.map((e) => (
          <li>{e}</li>
        ))}
      </div>
    );
  };

  return (
    <Formik
      initialValues={fields}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      validateOnChange={true}
      validateOnBlur={false}
    >
      {({
        isSubmitting,
        errors,
        handleChange,
        values,
        touched,
        setFieldValue,
      }) => (
        <FormikForm>
          {formErrors.length > 0 && displayFormErrors()}
          <div className="fieldset m-bottom-5">
            <Input
              name="lastName"
              onChange={handleChange}
              label="Last Name"
              value={values.lastName}
              classNames={touched.lastName && errors.lastName ? "error" : ""}
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
              classNames={touched.firstName && errors.firstName ? "error" : ""}
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
              classNames={
                touched.phoneNumber && errors.phoneNumber ? "error" : ""
              }
            ></Input>
            <ErrorMessage
              name="phoneNumber"
              component="div"
              className="invalid-feedback"
            />
          </div>
          <div className="fieldset m-bottom-5">
            <MySelect
              value={values.gender}
              onChange={setFieldValue}
              error={errors.gender}
              touched={touched.gender}
              field={"gender"}
              options={genderOptions}
            />
            <ErrorMessage
              name="gender"
              component="div"
              className="invalid-feedback"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn--primary"
          >
            Save
          </button>

          <button
            type="reset"
            className="btn btn--danger m-left-2"
            onClick={clearForm}
          >
            Cancel
          </button>
        </FormikForm>
      )}
    </Formik>
  );
};

export default Form;
