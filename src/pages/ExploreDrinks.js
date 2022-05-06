import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { getRandomDrink } from '../services';
import '../styles/Explore.css';

function ExploreDrinks() {
  const history = useHistory();

  const randomDrink = async () => {
    const res = await getRandomDrink();
    history.push(`/drinks/${res[0].idDrink}`);
  };
  return (
    <div className="div-page-explore">
      <Header
        text="Explore Drinks"
      />
      <div className="div-explore">
        <button
          onClick={ () => history.push('/explore/drinks/ingredients') }
          className="explore"
          data-testid="explore-by-ingredient"
          type="button"
        >
          By Ingredient
        </button>
        <button
          onClick={ () => randomDrink() }
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

export default ExploreDrinks;
