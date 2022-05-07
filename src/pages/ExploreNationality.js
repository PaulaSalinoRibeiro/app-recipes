import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Explore.css';
import FoodsByNationality from '../components/FoodsByNationality';

function ExploreNationality() {
  return (
    <div className="div-page-explore">
      <Header
        text="Explore Nationalities"
      />
      <FoodsByNationality />
      <Footer />
    </div>
  );
}

export default ExploreNationality;
