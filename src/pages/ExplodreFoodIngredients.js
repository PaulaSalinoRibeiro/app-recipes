import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/ExploreFoodIngredients.css';
import FoodIngredients from '../components/FoodIngredients';

function ExploreFoodIngredients() {
  return (
    <div className="ExploreFoodIngredients">
      <Header
        text="Explore Ingredients"
      />
      <FoodIngredients />
      <Footer />
    </div>
  );
}

export default ExploreFoodIngredients;
