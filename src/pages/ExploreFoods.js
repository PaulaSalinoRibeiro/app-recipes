import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/Explore.css';

function ExploreFoods() {
  return (
    <div>
      <Header
        text="Explore Foods"
      />
      <div className="div-explore">
        <Link
          className="explore"
          to="/explore/foods/ingredients"
        >
          <h3>Explore Foods By Indgredient</h3>
        </Link>

        <Link
          className="explore"
          to="/explore/foods/nationalities"
        >
          <h3>Explore Foods By Nationality</h3>
        </Link>

        <Link
          className="explore"
          to="/explore/drinks"
        >
          <h3>Surprise me!</h3>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default ExploreFoods;
