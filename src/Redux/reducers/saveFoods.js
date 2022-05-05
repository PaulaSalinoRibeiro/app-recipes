const SAVE_FOODS = 'SAVE_FOODS';
const RECIPE_SAVE = 'RECIPE_SAVE';

const initialState = {
  foods: [],
  recipe: [],
};

const saveFoods = (state = initialState, action) => {
  switch (action.type) {
  case SAVE_FOODS:
    return { ...state, foods: action.value };
  case RECIPE_SAVE:
    return { ...state, recipe: action.value };
  default:
    return state;
  }
};
export default saveFoods;
