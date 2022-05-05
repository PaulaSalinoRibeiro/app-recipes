export const VALIDATION_USER = 'VALIDATION_USER';
export const SAVE_FOODS = 'SAVE_FOODS';
export const SAVE_DRINKS = 'SAVE_DRINKS';
export const RECIPE_SAVE = 'RECIPE_SAVE';
export const RECIPE_DRINKS_SAVE = 'RECIPE_DRINKS_SAVE';
export const DRINK_RECOMEND = 'DRINK_RECOMEND';
export const FOOD_RECOMEND = 'FOOD_RECOMEND';
//  foods

export const actionUser = (value) => ({ type: VALIDATION_USER, value });

export const actionSaveFoods = (value) => ({ type: SAVE_FOODS, value });

export const actionSaveRecipe = (value) => ({ type: RECIPE_SAVE, value });

export const actionsFoodRecomend = (value) => ({ type: FOOD_RECOMEND, value });

// drinks

export const actionSaveRecipeDrinks = (value) => ({ type: RECIPE_DRINKS_SAVE, value });

export const actionSaveDrinks = (value) => ({ type: SAVE_DRINKS, value });

export const actionDrinkRecomend = (value) => ({ type: DRINK_RECOMEND, value });
