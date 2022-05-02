import React, { useState, useEffect } from 'react';
import { getFoodsCategories, getFoodsByCategory } from '../services';
import '../styles/FoodCategories.css';

function FoodCategories() {
  const [categories, setCategories] = useState([]);
  const [foodsByCategory, setFoodsByCategory] = useState([]);
  useEffect(() => {
    const fetchRecipes = async () => {
      const MAX_LENGTH = 5;
      const { meals } = await getFoodsCategories();
      setCategories(meals.slice(0, MAX_LENGTH));
    };
    fetchRecipes();
  }, []);

  const filterByCategory = async (category) => {
    console.log('cliquei');
    console.log(category);
    const MAX_LENGTH = 12;
    const { meals } = await getFoodsByCategory(category);
    console.log(meals);
    setFoodsByCategory(meals.slice(0, MAX_LENGTH));
    console.log(foodsByCategory);
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

export default FoodCategories;
