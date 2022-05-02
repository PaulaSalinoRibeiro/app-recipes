// drinks

export const getByIngridientDrinks = async (query) => {
  const URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${query}`;
  const res = await fetch(URL);
  const { ingredients } = await res.json();
  return ingredients;
};

export const getByNameDrinks = async (query) => {
  const URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`;
  const res = await fetch(URL);
  const { drinks } = await res.json();
  return drinks;
};

export const getByFirstLetterDrinks = async (query) => {
  const URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${query}`;
  const res = await fetch(URL);
  const { drinks } = await res.json();
  return drinks;
};

export const getDrinks = async () => {
  const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  const res = await fetch(URL);
  const drinks = await res.json();
  return drinks;
};

export const getDrinkCategories = async () => {
  const URL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  const res = await fetch(URL);
  const drinkCategories = await res.json();
  return drinkCategories;
};

export const getDrinksByCategory = async (drinkCategory) => {
  const URL = `www.thecocktaildb.com/api/json/v1/1/filter.php?c=${drinkCategory}`;
  const res = await fetch(URL);
  const drinkFiltered = await res.json();
  return drinkFiltered;
};

// foods

export const getByIngridientFoods = async (query) => {
  const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${query}`;
  const res = await fetch(URL);
  const { meals } = await res.json();
  return meals;
};

export const getByNameFoods = async (query) => {
  const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
  const res = await fetch(URL);
  const { meals } = await res.json();
  return meals;
};

export const getByFirstLetterFoods = async (query) => {
  const URL = `https://www.themealdb.com/api/json/v1/1/search.php?f=${query}`;
  const res = await fetch(URL);
  const { meals } = await res.json();
  return meals;
};

export const getFoods = async () => {
  const URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const res = await fetch(URL);
  const recipes = await res.json();
  return recipes;
};

export const getFoodsCategories = async () => {
  const URL = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
  const res = await fetch(URL);
  const foodCategories = await res.json();
  return foodCategories;
};

export const getFoodsByCategory = async (foodCategory) => {
  const URL = `www.themealdb.com/api/json/v1/1/filter.php?c=${foodCategory}`;
  const res = await fetch(URL);
  const foodFiltered = await res.json();
  return foodFiltered;
};
