const VALIDATION_USER = 'VALIDATION_USER';

const initialState = {
  user: {
    email: '',
    password: '',
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
  case VALIDATION_USER:
    return { ...state, email: action.value, password: action.value };
  default:
    return state;
  }
};

export default userReducer;
