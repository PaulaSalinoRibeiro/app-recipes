import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Explore.css';

function Explore() {
  const history = useHistory();
  return (
    <div className="div-page-explore">
      <Header
        text="Explore"
      />
      <h1 data-testid="page-title">Explore</h1>
      <div className="div-explore">
        <button
          className="explore"
          onClick={ () => history.push('/explore/foods') }
          data-testid="explore-foods"
          type="button"
        >
          Explore Foods
        </button>
        <button
          className="explore"
          onClick={ () => history.push('/explore/drinks') }
          data-testid="explore-drinks"
          type="button"
        >
          Explore Drinks
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Explore;
