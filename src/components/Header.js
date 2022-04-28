import React, { useState, useEffect } from 'react';
import '../styles/Header.css';
import { useHistory } from 'react-router-dom';
import Proptypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

function Header(props) {
  const history = useHistory();
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [search, setSearch] = useState(true);
  const { text } = props;

  const hideSearch = () => {
    if (history.location.pathname === '/explore') {
      setSearch(false);
    } else if (history.location.pathname === '/profile') {
      setSearch(false);
    } else if (history.location.pathname === '/explore/foods') {
      setSearch(false);
    } else if (history.location.pathname === '/explore/drinks') {
      setSearch(false);
    } else if (history.location.pathname === '/explore/foods/nationalities') {
      setSearch(true);
    } else if (history.location.pathname === '/done-recipes') {
      setSearch(false);
    } else if (history.location.pathname === '/favorite-recipes') {
      setSearch(false);
    } else if (history.location.pathname === '/explore/foods/ingredients') {
      setSearch(false);
    } else if (history.location.pathname === '/explore/drinks/ingredients') {
      setSearch(false);
    } else { setSearch(true); }
  };

  useEffect(() => {
    hideSearch();
  // }, []);
  });

  const changeDisplay = () => {
    if (isDisplayed === false) {
      setIsDisplayed(true);
    } else {
      setIsDisplayed(false);
    }
    return search;
  };

  return (
    <>
      <header className="header">
        <button
          type="button"
          onClick={ () => { history.push('/profile'); } }
          src={ profileIcon }
        >
          <img
            data-testid="profile-top-btn"
            src={ profileIcon }
            alt="Ícone perfil"
          />
        </button>

        <h1 data-testid="page-title">
          {text}
        </h1>

        {search && (
          <button
            type="button"
            src={ searchIcon }
            onClick={ () => changeDisplay() }
          >
            <img
              data-testid="search-top-btn"
              src={ searchIcon }
              alt="Ícone perfil"
            />
          </button>
        )}

      </header>
      { isDisplayed && <SearchBar />}
    </>
  );
}

Header.propTypes = {
  text: Proptypes.string,
  location: Proptypes.string,
}.isRequired;

export default Header;
