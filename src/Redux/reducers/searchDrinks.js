const SAVE_DRINKS = 'SAVE_DRINKS';
const RECIPE_DRINKS_SAVE = 'RECIPE_DRINKS_SAVE';
const FILTER_ACTIVE_DRINK = 'FILTER_ACTIVE_DRINK';

const initialState = {
  drinks: [],
  recipeDrinks: [],
  filterDrink: '',
};

const saveDrinks = (state = initialState, action) => {
  switch (action.type) {
  case SAVE_DRINKS:
    return { ...state, drinks: action.value };
  case RECIPE_DRINKS_SAVE:
    return { ...state, recipeDrinks: action.value };
  case FILTER_ACTIVE_DRINK:
    return { ...state, filterDrink: value };
  default:
    return state;
  }
};

export default saveDrinks;
