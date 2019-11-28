
const initialState = {
  email:'',
  firstName: '',
  lastName: '',
  gender:'Gender',
  company: '',
  currentZone: ''
};

const reducer = (state = initialState, action) => {

  switch (action.type) {

    case 'INPUT_EMAIL':
      return {...state,email: action.email};

    case 'INPUT_NAME':
      return {...state,[action.name]: action.value};

    case 'INPUT_COMPANY':
      return {...state, company: action.company};
    
    case 'INPUT_TIMEZONE':
      return {...state, currentZone: action.timezone};

    default:
      return state;
  }
};

export default reducer;
