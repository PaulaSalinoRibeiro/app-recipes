import React from 'react';
import PropTypes from 'prop-types';

function FoodCards({ foods }) {
  return (
    <div>
      {foods.map((food, index) => (
        <div data-testid={ `${index}-recipe-card` } key={ food.strMeal }>
          <img
            data-testid={ `${index}-card-img` }
            src={ food.strMealThumb }
            alt={ food.strMeal }
          />
          <h3 data-testid={ `${index}-card-name` }>
            {food.strMeal}
          </h3>
        </div>
      ))}
    </div>
  );
}

FoodCards.propTypes = {
  foods: PropTypes.arrayOf(Object),
  food: PropTypes.shape,
}.isRequired;

export default FoodCards;
