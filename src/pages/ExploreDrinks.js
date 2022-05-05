import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/Explore.css';

function ExploreDrinks() {
  return (
    <div className="div-page-explore">
      <Header
        text="Explore Drinks"
      />
      <div className="div-explore">
        <button
          className="explore"
          data-testid="explore-by-ingredient"
          type="button"
        >
          By Ingredient
        </button>
        <button
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
