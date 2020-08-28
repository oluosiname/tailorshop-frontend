import React, { useState } from "react";
import Select from "react-select";
import { capitalize } from "../utilities/utilities";
const MySelect = (props) => {
  let selectedOption;
  if (props.value) {
    selectedOption = {
      value: props.value,
      label: capitalize(props.value),
    };
  } else {
    selectedOption = props.options[0];
  }
  const handleChange = ({ value }) => {
    props.onChange(props.field, value);
  };

  return (
    <React.Fragment>
      <label htmlFor={props.field}>{capitalize(props.field)} </label>
      <Select
        options={props.options}
        onChange={handleChange}
        value={selectedOption}
        isSearchable={false}
      />
    </React.Fragment>
  );
};

export default MySelect;
