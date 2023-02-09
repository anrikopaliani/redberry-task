import React, { useState } from "react";
import FormHeader from "../FormHeader/FormHeader";
import Resume from "../resume/Resume";
import PersonalForm from "./Form/PersonalForm";

const Personal = ({ setFormValues, formValues }) => {
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
