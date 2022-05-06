// drinks

export const getByIngridientDrinks = async (query) => {
  const URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${query}`;
  const res = await fetch(URL);
  const { drinks } = await res.json();
  console.log(drinks);
  return drinks;
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
  const URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${drinkCategory}`;
  const res = await fetch(URL);
  const drinkFiltered = await res.json();
  return drinkFiltered;
};

export const getDrinkById = async (drinkId) => {
  const URL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`;
  const res = await fetch(URL);
  const { drinks } = await res.json();
  return drinks;
};

export const getDrinkRecomend = async () => {
  const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  const res = await fetch(URL);
  const { drinks } = await res.json();
  console.log(drinks);
  return drinks;
};

export const getRandomDrink = async () => {
  const URL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
  const res = await fetch(URL);
  const { drinks } = await res.json();
  console.log(drinks);
  return drinks;
};

export const getDrinkIngredients = async () => {
  const URL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';
  const res = await fetch(URL);
  const { drinks } = await res.json();
  return drinks;
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
  const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${foodCategory}`;
  const res = await fetch(URL);
  const foodFiltered = await res.json();
  return foodFiltered;
};

export const getFoodById = async (foodId) => {
  const URL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`;
  const res = await fetch(URL);
  const { meals } = await res.json();
  return meals;
};

export const getFoodsRecomend = async () => {
  const URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const res = await fetch(URL);
  const { meals } = await res.json();
  return meals;
};

export const getRandomFood = async () => {
  const URL = 'https://www.themealdb.com/api/json/v1/1/random.php';
  const res = await fetch(URL);
  const { meals } = await res.json();
  return meals;
};

export const getFoodIngredients = async () => {
  const URL = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
  const res = await fetch(URL);
  const { meals } = await res.json();
  return meals;
};
