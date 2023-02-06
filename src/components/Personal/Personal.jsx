import React, { useState } from "react";
import FormHeader from "../FormHeader/FormHeader";
import Resume from "../resume/Resume";
import PersonalForm from "./Form/PersonalForm";

const Personal = () => {
  const [formValues, setFormValues] = useState(
    JSON.parse(window.localStorage.getItem("form")) || {
      name: "",
      surname: "",
      email: "",
      phone_number: "",
      image: "",
      about_me: "",
    }
  );
  return (
    <div className="form_container">
      <div className="form">
        <FormHeader title="პირადი ინფო" pageNumber={1} />
        <PersonalForm formValues={formValues} setFormValues={setFormValues} />
      </div>

      <div className="resume">
        <Resume formValues={formValues} />
      </div>
    </div>
  );
};

export default Personal;
