import React from 'react';

function RecipeCard() {
  return (
    <div>
      {recipes.map((recipe, index) => (
        <div data-testid={ `${index}-recipe-card` } key={ recipe.name }>
          <img
            data-testid={ `${index}-card-img` }
            src={ recipe.image }
            alt={ recipe.name }
          />
          <h3 data-testid={ `${index}-card-name` }>
            {recipe.name}
          </h3>
        </div>
      ))}
    </div>
  );
}

export default RecipeCard;
