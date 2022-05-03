import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getDrinkCategories, getDrinksByCategory } from '../services';
import '../styles/DrinkCategories.css';

function DrinkCategories(props) {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchRecipes = async () => {
      const MAX_LENGTH = 5;
      const { drinks } = await getDrinkCategories();
      setCategories(drinks.slice(0, MAX_LENGTH));
    };
    fetchRecipes();
  }, []);

  const filterByCategory = async (category) => {
    const MAX_LENGTH = 12;
    const { sendRecipes } = props;
    const { drinks } = await getDrinksByCategory(category);
    sendRecipes(drinks.slice(0, MAX_LENGTH));
  };

  return (
    <div className="div-drinkCategories">
      {categories.map(({ strCategory }) => (
        <button
          type="button"
          data-testid={ `${strCategory}-category-filter` }
          key={ strCategory }
          onClick={ () => { filterByCategory(`${strCategory}`); } }
          className="button-drinkCategories"
        >
          {strCategory}
        </button>
      ))}
    </div>
  );
}

DrinkCategories.propTypes = {
  sendRecipes: PropTypes.func,
}.isRequired;

export default DrinkCategories;
