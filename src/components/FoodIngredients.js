import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { actionSaveIngredient, actionSearchIngredient } from '../Redux/actions';
import { getFoodIngredients } from '../services';
import '../styles/Foods.css';

function FoodIngredients() {
  const [ingredients, setIngredients] = useState();
  const history = useHistory();
  const dispatch = useDispatch();

  const searchByIngredient = (ingredient) => {
    dispatch(actionSaveIngredient(ingredient));
    dispatch(actionSearchIngredient(true));
    history.push('/foods/');
  };

  useEffect(() => {
    const fetchFoodIngredients = async () => {
      const MAX_LENGTH = 12;
      const res = await getFoodIngredients();
      setIngredients(res.slice(0, MAX_LENGTH));
    }; fetchFoodIngredients();
  }, []);
  return (
    <div className="div-foods">
      {ingredients
      && ingredients.map(({ strIngredient }, index) => (
        <div
          onClick={ () => searchByIngredient(strIngredient) }
          aria-hidden="true"
          className="renderRecipes"
          key={ index }
          data-testid={ `${index}-ingredient-card` }
        >
          <img
            className="food-img"
            src={ `https://www.themealdb.com/images/ingredients/${strIngredient}-Small.png` }
            alt={ strIngredient }
            data-testid={ `${index}-card-img` }
          />
          <p
            className="recepie-name"
            data-testid={ `${index}-card-name` }
          >
            {strIngredient}
          </p>
        </div>
      ))}
    </div>
  );
}

export default FoodIngredients;
