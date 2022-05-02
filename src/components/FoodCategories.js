import React, { useState, useEffect } from 'react';
import { getFoodsCategories } from '../services';
import '../styles/FoodCategories.css';

function FoodCategories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchRecipes = async () => {
      const MAX_LENGTH = 5;
      const { meals } = await getFoodsCategories();
      setCategories(meals.slice(0, MAX_LENGTH));
    };
    fetchRecipes();
  }, []);

  return (
    <div className="btn-category div-foodCategories">
      {categories.map(({ strCategory }) => (
        <button
          type="button"
          data-testid={ `${strCategory}-category-filter` }
          key={ strCategory }
          className="button-foodCategories"
        >
          {strCategory}
        </button>
      ))}
    </div>
  );
}

export default FoodCategories;
