import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DrinkIngredients from '../components/DrinkIngredients';

function ExploreDrinkIngredients() {
  return (
    <div>
      <Header
        text="Explore Ingredients"
      />
      <Footer />
      <DrinkIngredients />
    </div>
  );
}

export default ExploreDrinkIngredients;
