export const validate = (name, value) => {
  let errors = {};
  if (name === "position" || name === "employer") {
    if (!value || value.replace(/\s/g, "").length < 2) {
      errors[name] = true;
    } else {
      errors[name] = false;
    }
  }

  if (name === "start_date" || name === "due_date") {
    if (!value) {
      errors[name] = true;
    } else {
      errors[name] = false;
    }
  }

  if (name === "description") {
    if (!value) {
      errors[name] = true;
    } else {
      errors[name] = false;
    }
  }

  return errors;
};

export const validateOnSubmit = (experiences) => {
  let errors = experiences.map((obj) => {
    return {
      position: null,
      due_date: null,
      start_date: null,
      description: null,
      employer: null,
    };
  });

  experiences.forEach((object, index) => {
    if (!object.position || object.position.replace(/\s/g, "").length < 2) {
      errors[index].position = true;
    } else {
      errors[index].position = false;
    }

    if (!object.employer || object.employer.replace(/\s/g, "").length < 2) {
      errors[index].employer = true;
    } else {
      errors[index].employer = false;
    }

    if (!object.description) {
      errors[index].description = true;
    } else {
      errors[index].description = false;
    }

    if (!object.due_date) {
      errors[index].due_date = true;
    } else {
      errors[index].due_date = false;
    }

    if (!object.start_date) {
      errors[index].start_date = true;
    } else {
      errors[index].start_date = false;
    }
  });

  return errors;
};
