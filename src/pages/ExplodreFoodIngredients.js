import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/ExploreFoodIngredients.css';

function ExploreFoodIngredients() {
  return (
    <div className="ExploreFoodIngredients">
      <Header
        text="Explore Ingredients"
      />
      <Footer />
    </div>
  );
}

export default ExploreFoodIngredients;
