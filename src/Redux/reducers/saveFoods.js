const SAVE_FOODS = 'SAVE_FOODS';

const initialState = {
  foods: [],
};

const saveFoods = (state = initialState, action) => {
  switch (action.type) {
  case SAVE_FOODS:
    return { foods: action.value };
  default:
    return state;
  }
};

export default saveFoods;
