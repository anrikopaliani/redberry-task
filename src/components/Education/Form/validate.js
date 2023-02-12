export const validate = (name, value) => {
  let errors = {};
  if (name === "institute") {
    if (value.replaceAll(" ", "").length < 2) {
      errors[name] = true;
    } else {
      errors[name] = false;
    }
  }

  if (name === "degree_id" || name === "due_date" || name === "description") {
    if (!value) {
      errors[name] = true;
    } else {
      errors[name] = false;
    }
  }

  return errors;
};

export const validateOnSubmit = (educations) => {
  let errors = educations.map((obj) => {
    return {
      institute: null,
      degree_id: null,
      due_date: null,
      description: null,
    };
  });

  educations.forEach((object, index) => {
    if (object.institute.replaceAll(" ", "").length < 2) {
      errors[index].institute = true;
    } else {
      errors[index].institute = false;
    }

    if (!object.degree_id) {
      errors[index].degree_id = true;
    } else {
      errors[index].degree_id = false;
    }

    if (!object.due_date) {
      errors[index].due_date = true;
    } else {
      errors[index].due_date = false;
    }

    if (!object.description) {
      errors[index].description = true;
    } else {
      errors[index].description = false;
    }
  });
  return errors;
};
