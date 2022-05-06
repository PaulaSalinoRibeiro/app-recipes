const toLocalStorageFormatDrink = (recipe) => ({
  id: recipe.idDrink,
  type: 'drink',
  nationality: '',
  category: recipe.strCategory,
  alcoholicOrNot: recipe.strAlcoholic,
  name: recipe.strDrink,
  image: recipe.strDrinkThumb,
});

const toLocalStorageFormatFood = (recipe) => ({
  id: recipe.idMeal,
  type: 'food',
  nationality: recipe.strArea,
  category: recipe.strCategory,
  alcoholicOrNot: '',
  name: recipe.strMeal,
  image: recipe.strMealThumb,
});

export const verifyIsDoneRecipe = (recipeId) => JSON
  .parse(localStorage.getItem('doneRecipes'))?.some(
    ({ id }) => id === recipeId,
  );

export const verifyIsInProgressRecipe = (recipeId, page) => {
  const recipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
  if (recipes) {
    const arr = Object.keys(recipes[page]);
    return arr?.some((id) => id === recipeId);
  }
};

export const favoriteDrink = (recipe) => {
  const recipeList = JSON.parse(localStorage.getItem('favoriteRecipes'));
  let newList = [];
  if (recipeList) {
    newList = recipeList.find((item) => item.id === recipe.id)
      ? recipeList.filter((item) => item.id !== recipe.id)
      : [...recipeList, toLocalStorageFormatDrink(recipe)];
  } else {
    newList = [toLocalStorageFormatDrink(recipe)];
  }
  localStorage.setItem('favoriteRecipes', JSON.stringify(newList));
};

export const favoriteFood = (recipe) => {
  const recipeList = JSON.parse(localStorage.getItem('favoriteRecipes'));
  let newList = [];
  if (recipeList) {
    newList = recipeList.find((item) => item.id === recipe.id)
      ? recipeList.filter((item) => item.id !== recipe.id)
      : [...recipeList, toLocalStorageFormatFood(recipe)];
  } else {
    newList = [toLocalStorageFormatFood(recipe)];
  }
  localStorage.setItem('favoriteRecipes', JSON.stringify(newList));
};
