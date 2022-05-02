import React from 'react';

function RecipeFoods() {
  return (
    <div
      key={ idMeal }
      data-testid={ `${index}-recipe-card` }
    >
      <img src={ strMealThumb } alt={ strMeal } />
      <span>{strMeal}</span>
    </div>
  );
}

export default RecipeFoods;
