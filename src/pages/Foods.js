import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FoodCards from '../components/FoodCards';
import { getFoods } from '../services';
import FoodCategories from '../components/FoodCategories';
import '../styles/Foods.css';

function Foods() {
  const [recipes, setRecipes] = useState([]);
  const history = useHistory();
  const saveFoods = useSelector((state) => state.saveFoods);
  const { foods } = saveFoods;
  const ERRO_MENSAGER = 'Sorry, we haven\'t found any recipes for these filters.';

  useEffect(() => {
    const fetchRecipes = async () => {
      const MAX_LENGTH = 12;
      const { meals } = await getFoods();
      setRecipes(meals.slice(0, MAX_LENGTH));
    };
    fetchRecipes();
  }, []);

  const redirectToDetails = () => {
    if (foods?.length === 1) {
      history.push(`/foods/${foods[0].idMeal}`);
    } else if (foods?.length > 1) {
      return <FoodCards foods={ foods } />;
    } else {
      global.alert(ERRO_MENSAGER);
    }
  };

  const renderRecipes = () => (
    <div
      className="div-foods"
    >
      {
        recipes.map(({ idMeal, strMeal, strMealThumb }, index) => (
          <div
            key={ idMeal }
            data-testid={ `${index}-recipe-card` }
            className="renderRecipes"
          >
            <img
              data-testid={ `${index}-card-img` }
              src={ strMealThumb }
              alt={ strMeal }
              className="food-img"
            />
            <p
              data-testid={ `${index}-card-name` }
              className="recepie-name"
            >
              {strMeal}
            </p>
          </div>))
      }
    </div>
  );

  return (
    <div>
      <Header
        text="Foods"
      />
      <FoodCategories />
      {
        foods?.length !== 0 ? redirectToDetails() : renderRecipes()
      }
      <Footer />
    </div>
  );
}

export default Foods;
