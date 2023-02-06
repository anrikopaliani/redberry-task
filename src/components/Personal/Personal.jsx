import React, { useState } from "react";
import FormHeader from "../FormHeader/FormHeader";
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
      {/* THIS DIV IS FOR FORM AND FORM HEADER */}
      <div className="form">
        <FormHeader title="პირადი ინფო" pageNumber={1} />
        <PersonalForm formValues={formValues} setFormValues={setFormValues} />
      </div>
      {/* THIS DIV IS FOR RESUME PAGE */}
      <div></div>
    </div>
  );
};

export default Personal;
