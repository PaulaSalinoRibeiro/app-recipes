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
