import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Explore.css';

function Explore() {
  return (
    <div className="div-page-explore">
      <Header
        text="Explore"
      />

      <div className="div-explore">
        <Link
          className="explore"
          to="/explore/foods"
        >
          <h3>Explore Foods</h3>
        </Link>

        <Link
          className="explore"
          to="/explore/drinks"
        >
          <h3>Explore Drinks</h3>
        </Link>
      </div>

      <Footer />
    </div>
  );
}

export default Explore;
