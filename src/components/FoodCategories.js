import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getFoodsCategories, getFoodsByCategory } from '../services';
import '../styles/FoodCategories.css';

function FoodCategories(props) {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchRecipes = async () => {
      const MAX_LENGTH = 5;
      const { meals } = await getFoodsCategories();
      setCategories(meals.slice(0, MAX_LENGTH));
    };
    fetchRecipes();
  }, []);

  const filterByCategory = async (category) => {
    const MAX_LENGTH = 12;
    const { sendRecipe } = props;
    const { meals } = await getFoodsByCategory(category);
    sendRecipe(meals.slice(0, MAX_LENGTH));
  };

  return (
    <div className="btn-category div-foodCategories">
      {categories.map(({ strCategory }) => (
        <button
          type="button"
          data-testid={ `${strCategory}-category-filter` }
          key={ strCategory }
          onClick={ () => { filterByCategory(`${strCategory}`); } }
          className="button-foodCategories"
        >
          {strCategory}
        </button>
      ))}
    </div>
  );
}

FoodCategories.propTypes = {
  sendRecipe: PropTypes.func,
}.isRequired;

export default FoodCategories;
