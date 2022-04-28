const SAVE_DRINKS = 'SAVE_DRINKS';

const initialState = {
  drinks: [],
};

const saveDrinks = (state = initialState, action) => {
  switch (action.type) {
  case SAVE_DRINKS:
    return { ...state, drinks: action.value };
  default:
    return state;
  }
};

export default saveDrinks;
