const SAVE_FOODS = 'SAVE_FOODS';
const RECIPE_SAVE = 'RECIPE_SAVE';
const INGREDIENT_SAVE = 'INGREDIENT_SAVE';
const SEARCH_BY_INGREDIENT = 'SEARCH_BY_INGREDIENT';

const initialState = {
  foods: [],
  recipe: [],
  ingredient: '',
  searchByIngredient: false,
};

const saveFoods = (state = initialState, action) => {
  switch (action.type) {
  case SAVE_FOODS:
    return { ...state, foods: action.value };
  case RECIPE_SAVE:
    return { ...state, recipe: action.value };
  case INGREDIENT_SAVE:
    return { ...state, ingredient: action.value };
  case SEARCH_BY_INGREDIENT:
    return { ...state, searchByIngredient: action.value };
  default:
    return state;
  }
};
export default saveFoods;
