// const toLocalStorageFormat = (recipe) => {
//   console.log(recipe);
// };

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

// export const favoriteRecipe = (recipe) => {
//   const recipeList = JSON.parse(localStorage.getItem('favoriteRecipes'));
//   let newList = [];
//   if (recipeList) {
//     newList = recipeList.find((item) => item.id === recipe.id)
//       ? recipeList.filter((item) => item.id !== recipe.id)
//       : [...recipeList, toLocalStorageFormat(recipe)];
//   } else {
//     newList = [toLocalStorageFormat(recipe)];
//   }
//   localStorage.setItem('favoriteRecipes', JSON.stringify(newList));
// };

// export const isFavoriteRecipe = (recipe) => {
//   const recipeList = JSON.parse(localStorage.getItem('favoriteRecipes'));
//   if (recipeList) return recipeList.find((item) => item.id === recipe.id);
//   return false;
// };
