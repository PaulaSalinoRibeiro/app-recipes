import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import '../styles/Drinks.css';

function DrinkCards({ drinks }) {
  const history = useHistory();
  return (
    <div className="div-drinks">
      {drinks.map((drink, index) => (
        <div
          onClick={ () => history.push(`/drinks/${drink.idMeal}`) }
          aria-hidden="true"
          data-testid={ `${index}-recipe-card` }
          key={ drink.strDrink }
          className="renderRecipes"
        >
          <img
            data-testid={ `${index}-card-img` }
            src={ drink.strDrinkThumb }
            alt={ drink.strDrink }
            className="drink-img"
          />
          <h3
            data-testid={ `${index}-card-name` }
            className="recepie-name"
          >
            {drink.strDrink}
          </h3>
        </div>
      ))}
    </div>
  );
}

DrinkCards.propTypes = {
  drinks: PropTypes.arrayOf(Object),
  drink: PropTypes.shape,
}.isRequired;

export default DrinkCards;
