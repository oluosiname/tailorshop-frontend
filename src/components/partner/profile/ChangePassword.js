import React, { useState } from "react";
import Input from "../../input/Input";
import FormErrors from "../../FormErrors";

const ChangePassword = () => {
  const [formErrors, setFormErrors] = useState([]);

  const handleSubmit = () => {};

  return (
    <section className="card">
      <div className="card__header">
        <div className="card__header__title">Change Password</div>
      </div>
      <div className="card__body">
        {formErrors.length > 0 && <FormErrors errors={formErrors} />}
        <div className="m-bottom-5">
          <Input label="Current Password" type="password" />
        </div>

        <div className="m-bottom-5">
          <Input label="New Password" type="password" />
        </div>
        <div className="m-bottom-5">
          <Input label="Confirm New Password" type="password" />
        </div>

        <button
          type="submit"
          className="btn btn--primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </section>
  );
};

export default ChangePassword;
