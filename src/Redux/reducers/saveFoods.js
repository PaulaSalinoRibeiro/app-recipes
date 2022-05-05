const SAVE_FOODS = 'SAVE_FOODS';
const RECIPE_SAVE = 'RECIPE_SAVE';
const FOOD_RECOMEND = 'FOOD_RECOMEND';

const initialState = {
  foods: [],
  recipe: [],
  foodRecomend: [],
};

const saveFoods = (state = initialState, action) => {
  switch (action.type) {
  case SAVE_FOODS:
    return { ...state, foods: action.value };
  case RECIPE_SAVE:
    return { ...state, recipe: action.value };
  case FOOD_RECOMEND:
    return { ...state, foodRecomend: action.value };
  default:
    return state;
  }
};
export default saveFoods;
