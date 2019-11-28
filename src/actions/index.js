const inputEmail = (email) => {
  return {
    type: 'INPUT_EMAIL',
    email
  };
};


const inputName = (name,value) => {
  return {
    type: 'INPUT_NAME',
    name,
    value
  };
};

const inputCompany = (company) => {
  return {
    type: 'INPUT_COMPANY',
    company
  };
};

const inputTimezone = (timezone) => {
  return {
    type: 'INPUT_TIMEZONE',
    timezone
  };
};

export {
  inputEmail,
  inputName,
  inputCompany,
  inputTimezone
};
