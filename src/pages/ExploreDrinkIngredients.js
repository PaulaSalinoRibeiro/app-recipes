import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DrinkIngredients from '../components/DrinkIngredients';
import '../styles/ExploreFoodIngredients.css';

function ExploreDrinkIngredients() {
  return (
    <div className="ExploreFoodIngredients">
      <Header
        text="Explore Ingredients"
      />
      <DrinkIngredients />
      <Footer />
    </div>
  );
}

export default ExploreDrinkIngredients;
