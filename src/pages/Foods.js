import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FoodCards from '../components/FoodCards';

function Foods() {
  const history = useHistory();
  const saveFoods = useSelector((state) => state.saveFoods);
  const { foods } = saveFoods;
  const ERRO_MENSAGER = 'Sorry, we haven\'t found any recipes for these filters.';

  const redirectToDetails = () => {
    if (foods?.length === 1) {
      history.push(`/foods/${foods[0].idMeal}`);
    } else if (foods?.length > 1) {
      return <FoodCards foods={ foods } />;
    } else {
      global.alert(ERRO_MENSAGER);
    }
  };

  return (
    <div>
      <Header
        text="Foods"
      />
      {
        foods?.length !== 0 && redirectToDetails()
      }
      <Footer />
    </div>
  );
}

export default Foods;
