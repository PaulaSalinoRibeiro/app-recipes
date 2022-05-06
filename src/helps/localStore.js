// const toLocalStorageFormat = (recipe) => {
//   console.log(recipe);
// };

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
