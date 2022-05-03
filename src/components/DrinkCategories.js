import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getDrinkCategories, getDrinksByCategory } from '../services';
import '../styles/DrinkCategories.css';

function DrinkCategories(props) {
  const { recipeDrinks } = useSelector((state) => state.searchDrinks);
  const [categories, setCategories] = useState([]);
  const { sendRecipes } = props;
  const [select, setSelect] = useState('');

  useEffect(() => {
    const fetchRecipes = async () => {
      const MAX_LENGTH = 5;
      const { drinks } = await getDrinkCategories();
      setCategories(drinks.slice(0, MAX_LENGTH));
    };
    fetchRecipes();
  }, []);

  const filterByCategory = async (category) => {
    if (category !== select) {
      const MAX_LENGTH = 12;
      const { drinks } = await getDrinksByCategory(category);
      sendRecipes(drinks.slice(0, MAX_LENGTH));
    } else {
      sendRecipes(recipeDrinks);
    }
    setSelect(category);
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
      <button
        type="button"
        data-testid="All-category-filter"
        className="button-drinkCategories"
        onClick={ () => sendRecipes(recipeDrinks) }
      >
        All
      </button>
    </div>
  );
}

DrinkCategories.propTypes = {
  sendRecipes: PropTypes.func,
}.isRequired;

export default DrinkCategories;
