import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import '../styles/FoodCards.css';

function FoodCards({ foods }) {
  const history = useHistory();

  const redirectToDetails = (idMeal) => {
    console.log('cliquei');
    history.push(`/foods/${idMeal}`);
  };

  return (
    <div>
      {foods.map((food, index) => (
        <div
          onClick={ () => redirectToDetails(`${idMeal}`) }
          aria-hidden="true"
          data-testid={ `${index}-recipe-card` }
          key={ food.strMeal }
          className="cardDetails"
        >
          <img
            className="img-cardDetails"
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
