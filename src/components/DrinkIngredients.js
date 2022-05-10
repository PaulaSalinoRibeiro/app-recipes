import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { actionSaveIngredient, actionSearchIngredient } from '../Redux/actions';
import { getDrinkIngredients } from '../services';
import '../styles/Foods.css';
// import '../styles/Drinks.css';

function DrinkIngredients() {
  const [ingredients, setIngredients] = useState();
  const history = useHistory();
  const dispatch = useDispatch();

  const searchByIngredient = (ingredient) => {
    dispatch(actionSaveIngredient(ingredient));
    dispatch(actionSearchIngredient(true));
    history.push('/drinks/');
  };

  useEffect(() => {
    const fetchDrinkIngredients = async () => {
      const MAX_LENGTH = 12;
      const res = await getDrinkIngredients();
      setIngredients(res.slice(0, MAX_LENGTH));
    }; fetchDrinkIngredients();
  }, []);

  return (
    <div className="ExploreDrinkIngredients div-drinks">
      {ingredients
      && ingredients.map(({ strIngredient1 }, index) => (
        <div
          onClick={ () => searchByIngredient(strIngredient1) }
          aria-hidden="true"
          className="renderRecipes"
          key={ index }
          data-testid={ `${index}-ingredient-card` }
        >
          <img
            className="food-img"
            src={ `https://www.thecocktaildb.com/images/ingredients/${strIngredient1}-Small.png` }
            alt={ strIngredient1 }
            data-testid={ `${index}-card-img` }
          />
          <p
            className="recepie-name"
            data-testid={ `${index}-card-name` }
          >
            {strIngredient1}
          </p>
        </div>
      ))}
    </div>
  );
}

export default DrinkIngredients;
