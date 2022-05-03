const SAVE_FOODS = 'SAVE_FOODS';
const RECIPE_SAVE = 'RECIPE_SAVE';
const FILTER_ACTIVE_FOOD = 'FILTER_ACTIVE_FOOD';

const initialState = {
  foods: [],
  recipe: [],
  filterFood: false,
};

const saveFoods = (state = initialState, action) => {
  switch (action.type) {
  case SAVE_FOODS:
    return { foods: action.value };
  case RECIPE_SAVE:
    return { ...state, recipe: action.value };
  case FILTER_ACTIVE_FOOD:
    return { ...state, filter: !state.filterFood };
  default:
    return state;
  }
};

export default saveFoods;
