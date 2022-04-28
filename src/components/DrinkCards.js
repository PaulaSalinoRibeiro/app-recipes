import React from 'react';
import PropTypes from 'prop-types';

function DrinkCards({ drinks }) {
  return (
    <div>
      {drinks.map((drink, index) => (
        <div data-testid={ `${index}-recipe-card` } key={ drink.strDrink }>
          <img
            data-testid={ `${index}-card-img` }
            src={ drink.strDrinkThumb }
            alt={ drink.strDrink }
          />
          <h3 data-testid={ `${index}-card-name` }>
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
