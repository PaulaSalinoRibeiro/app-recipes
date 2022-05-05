import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/Explore.css';

function ExploreFoods() {
  return (
    <div className="div-page-explore">
      <Header
        text="Explore Foods"
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
          data-testid="explore-by-nationality"
          type="button"
        >
          By Nationality
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

export default ExploreFoods;
