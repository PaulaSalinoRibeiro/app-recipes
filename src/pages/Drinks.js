/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DrinkCards from '../components/DrinkCards';
import { actionSaveRecipeDrinks } from '../Redux/actions';
import { getDrinks } from '../services';
import DrinkCategories from '../components/DrinkCategories';
import '../styles/Drinks.css';

function Drinks() {
  const history = useHistory();
  const dispatch = useDispatch();
  const searchDrinks = useSelector((state) => state.searchDrinks);
  const { drinks } = searchDrinks;
  const [drinksRecipes, setDrinksRecipes] = useState([]);
  const ERRO_MENSAGER = 'Sorry, we haven\'t found any recipes for these filters.';

  useEffect(() => {
    const MAX_LENGTH = 12;
    const fetchDinksRecipes = async () => {
      const allDrinks = await getDrinks();
      setDrinksRecipes(allDrinks.drinks.slice(0, MAX_LENGTH));
      dispatch(actionSaveRecipeDrinks(allDrinks.drinks.slice(0, MAX_LENGTH)));
    }; fetchDinksRecipes();
  }, []);

  const redirectToDetails = () => {
    const MAX_LENGTH = 12;
    if (drinks?.length === 1) {
      history.push(`/drinks/${drinks[0].idDrink}`);
    } else if (drinks?.length > 1 && drinks?.length < MAX_LENGTH) {
      return <DrinkCards drinks={ drinks } />;
    } else if (drinks?.length > MAX_LENGTH) {
      return <DrinkCards drinks={ drinks.slice(0, MAX_LENGTH) } />;
    } else {
      global.alert(ERRO_MENSAGER);
    }
  };

  const renderRecipesDrinks = () => (
    <div
      className="div-drinks"
    >
      {
        drinksRecipes.map(({ strDrink, strDrinkThumb }, index) => (
          <div
            key={ index }
            data-testid={ `${index}-recipe-card` }
            className="renderRecipes"
          >
            <img
              data-testid={ `${index}-card-img` }
              src={ strDrinkThumb }
              alt={ strDrink }
              className="drink-img"
            />
            <p
              data-testid={ `${index}-card-name` }
              className="recepie-name"
            >
              {strDrink}
            </p>
          </div>
        ))
      }
    </div>
  );

  return (
    <div>
      <Header
        text="Drinks"
      />
      <DrinkCategories sendRecipes={ setDrinksRecipes } />
      {
        drinks?.length !== 0 ? redirectToDetails() : renderRecipesDrinks()
      }
      <Footer />
    </div>
  );
}

export default Drinks;
