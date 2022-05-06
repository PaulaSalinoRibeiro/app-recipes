import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/Explore.css';
import { getRandomFood } from '../services';

function ExploreFoods() {
  const history = useHistory();

  const randomFood = async () => {
    const res = await getRandomFood();
    history.push(`/foods/${res[0].idMeal}`);
  };
  return (
    <div className="div-page-explore">
      <Header
        text="Explore Foods"
      />
      <div className="div-explore">
        <button
          onClick={ () => history.push('/explore/foods/ingredients') }
          className="explore"
          data-testid="explore-by-ingredient"
          type="button"
        >
          By Ingredient
        </button>
        <button
          onClick={ () => history.push('/explore/foods/nationalities') }
          className="explore"
          data-testid="explore-by-nationality"
          type="button"
        >
          By Nationality
        </button>
        <button
          onClick={ () => randomFood() }
          className="explore"
          data-testid="explore-surprise"
          type="button"
        >
          Surprise me!
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default ExploreFoods;
