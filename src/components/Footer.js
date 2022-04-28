import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';
import MealIcon from '../images/mealIcon.svg';
import DrinkIcon from '../images/drinkIcon.svg';
import ExploreIcon from '../images/exploreIcon.svg';

function Footer() {
  return (
    <footer data-testid="footer" className="footer">
      <Link
        to="/drinks"
        data-testid="drinks-bottom-btn"
        src={ DrinkIcon }
      >
        <img src={ DrinkIcon } alt="DrinkIcon" />
      </Link>

      <Link
        to="/explore"
        data-testid="explore-bottom-btn"
        src={ ExploreIcon }
      >
        <img src={ ExploreIcon } alt="ExploreIcon" />
      </Link>

      <Link
        to="/foods"
        data-testid="food-bottom-btn"
        src={ MealIcon }
      >
        <img src={ MealIcon } alt="MealIcon" />
      </Link>

    </footer>
  );
}

export default Footer;
