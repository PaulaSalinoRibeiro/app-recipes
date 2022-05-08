import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import '../styles/FoodCards.css';

function FoodCards({ foods }) {
  const history = useHistory();

  return (
    <div className="div-foods">
      {foods.map((food, index) => (
        <div
          onClick={ () => history.push(`/foods/${food.idMeal}`) }
          aria-hidden="true"
          data-testid={ `${index}-recipe-card` }
          key={ food.strMeal }
          className="renderRecipes"
        >
          <img
            className="food-img"
            data-testid={ `${index}-card-img` }
            src={ food.strMealThumb }
            alt={ food.strMeal }
          />
          <h3
            data-testid={ `${index}-card-name` }
            className="recepie-name"
          >
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
