import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DrinkCards from '../components/DrinkCards';

function Drinks() {
  const history = useHistory();
  const searchDrinks = useSelector((state) => state.searchDrinks);
  const { drinks } = searchDrinks;
  console.log(drinks);
  const ERRO_MENSAGER = 'Sorry, we haven\'t found any recipes for these filters.';

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

  return (
    <div>
      <Header
        text="Drinks"
      />
      {
        drinks?.length !== 0 && redirectToDetails()
      }
      <Footer />
    </div>
  );
}

export default Drinks;
