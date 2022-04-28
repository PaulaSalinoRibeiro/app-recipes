export const VALIDATION_USER = 'VALIDATION_USER';
export const SAVE_FOODS = 'SAVE_FOODS';
export const SAVE_DRINKS = 'SAVE_DRINKS';

export const actionUser = (value) => ({ type: VALIDATION_USER, value });

export const actionSaveFoods = (value) => ({ type: SAVE_FOODS, value });

export const actionSaveDrinks = (value) => ({ type: SAVE_DRINKS, value });
