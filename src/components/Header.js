import React from 'react';
import './Header.css';
import { useHistory } from 'react-router-dom';
import Proptypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header(props) {
  const history = useHistory();
  const { text } = props;
  return (
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

      <button
        data-testid="search-input"
        type="button"
        src={ searchIcon }
      >
        <img
          data-testid="search-top-btn"
          src={ searchIcon }
          alt="Ícone perfil"
        />
      </button>
    </header>
  );
}

Header.propTypes = {
  text: Proptypes.string.isRequired,
};

export default Header;
