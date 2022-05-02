import React, { useState, useEffect } from 'react';
import { getDrinkCategories } from '../services';
import '../styles/DrinkCategories.css';

function DrinkCategories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchRecipes = async () => {
      const MAX_LENGTH = 5;
      const { drinks } = await getDrinkCategories();
      setCategories(drinks.slice(0, MAX_LENGTH));
    };
    fetchRecipes();
  }, []);

  return (
    <div className="div-drinkCategories">
      {categories.map(({ strCategory }) => (
        <button
          type="button"
          data-testid={ `${strCategory}-category-filter` }
          key={ strCategory }
          className="button-drinkCategories"
        >
          {strCategory}
        </button>
      ))}
    </div>
  );
}

export default DrinkCategories;
