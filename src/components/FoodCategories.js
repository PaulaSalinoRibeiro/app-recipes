import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getFoodsCategories, getFoodsByCategory } from '../services';
import '../styles/FoodCategories.css';

function FoodCategories(props) {
  const { sendRecipe } = props;
  const { recipe } = useSelector((state) => state.saveFoods);
  const [categories, setCategories] = useState([]);
  const [select, setSelect] = useState('');

  useEffect(() => {
    const fetchRecipes = async () => {
      const MAX_LENGTH = 5;
      const { meals } = await getFoodsCategories();
      setCategories(meals.slice(0, MAX_LENGTH));
    };
    fetchRecipes();
  }, []);

  const filterByCategory = async (category) => {
    if (category !== select) {
      const MAX_LENGTH = 12;
      const { meals } = await getFoodsByCategory(category);
      sendRecipe(meals.slice(0, MAX_LENGTH));
      // console.log('api', meals);
    } else {
      sendRecipe(recipe);
      // console.log('state', recipe);
    }
    setSelect(category);
    // console.log(category);
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
      <button
        type="button"
        data-testid="All-category-filter"
        className="button-foodCategories"
        onClick={ () => sendRecipe(recipe) }
      >
        All
      </button>
    </div>
  );
}

FoodCategories.propTypes = {
  sendRecipe: PropTypes.func,
}.isRequired;

export default FoodCategories;
