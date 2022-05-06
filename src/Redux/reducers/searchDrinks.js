const SAVE_DRINKS = 'SAVE_DRINKS';
const RECIPE_DRINKS_SAVE = 'RECIPE_DRINKS_SAVE';

const initialState = {
  drinks: [],
  recipeDrinks: [],
};

const saveDrinks = (state = initialState, action) => {
  switch (action.type) {
  case SAVE_DRINKS:
    return { ...state, drinks: action.value };
  case RECIPE_DRINKS_SAVE:
    return { ...state, recipeDrinks: action.value };
  default:
    return state;
  }
};
export default saveDrinks;
