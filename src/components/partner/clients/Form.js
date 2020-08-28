import React, { useState } from "react";
import { Formik, Form as FormikForm, ErrorMessage, Field } from "formik";
import { string, object, number } from "yup";
import Input from "../../input/Input";
import MySelect from "../../MySelect";

const genderOptions = [
  { value: "", label: "Select....", color: "#0052CC", isDisabled: true },
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
];

const Form = ({ handleSubmit, fields }) => {
  const [formErrors, setFormErrors] = useState([]);
  let clientSchema = object().shape({
    // firstName: string().required("Please enter client's first name"),
    // lastName: string().required("Please enter client's last name"),
    // gender: string().required("Please select a gender"),
    // phoneNumber: number()
    //   .typeError("Phone number should contain only numbers")
    //   .required("Please enter client's phone number"),
  });

  const onSubmit = (values, { setSubmitting }) => {
    handleSubmit(values).catch((err) => {
      setFormErrors(err.response.data.errors);
      setSubmitting(false);
    });
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
      validationSchema={clientSchema}
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
        </FormikForm>
      )}
    </Formik>
  );
};

export default Form;
