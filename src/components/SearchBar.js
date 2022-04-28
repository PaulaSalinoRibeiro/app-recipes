import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getByIngridientFoods, getByNameFoods, getByFirstLetterFoods,
  getByIngridientDrinks, getByNameDrinks, getByFirstLetterDrinks } from '../services';
import '../styles/SearchBar.css';

function SearchBar() {
  const [searchInput, setSearchInput] = useState('');
  const [search, setSearch] = useState('');

  const history = useHistory();
  const route = history.location.pathname;
  const ERROR_MESSAGEM = 'Your search must have only 1 (one) character';

  const fetchApiFoods = async () => {
    if (search === 'ingredient') {
      const searchByIngredients = await getByIngridientFoods(searchInput);
      console.log(searchByIngredients);
    } else if (search === 'name') {
      const searchByName = await getByNameFoods(searchInput);
      console.log(searchByName);
    } else {
      const serchByLetters = await getByFirstLetterFoods(searchInput);
      console.log(serchByLetters);
    }
  };

  const fetchApiDrinks = async () => {
    if (search === 'ingredient') {
      const searchByIngredients = await getByIngridientDrinks(searchInput);
      console.log(searchByIngredients);
    } else if (search === 'name') {
      const searchByName = await getByNameDrinks(searchInput);
      console.log(searchByName);
    } else {
      const serchByLetters = await getByFirstLetterDrinks(searchInput);
      console.log(serchByLetters);
    }
  };

  const handleClick = async () => {
    if (searchInput.length > 1 && search === 'first-letters') {
      global.alert(ERROR_MESSAGEM);
    }
    if (route === '/foods') {
      await fetchApiFoods();
    }

    if (route === '/drinks') {
      await fetchApiDrinks();
    }
  };

  return (
    <section className="searchBar">
      <input
        type="text"
        name="searchInput"
        value={ searchInput }
        onChange={ (e) => setSearchInput(e.target.value) }
        placeholder="search a ingredient"
        className="search-ingredient"
        data-testid="search-input"
      />
      <div className="inputs-filters" onChange={ (e) => setSearch(e.target.value) }>
        <label htmlFor="searchByIngredients">
          Ingredient
          <input
            data-testid="ingredient-search-radio"
            type="radio"
            name="search"
            value="ingredient"
            id="searchByIngredients"
          />
        </label>
        <label htmlFor="searchByName">
          name
          <input
            data-testid="name-search-radio"
            type="radio"
            name="search"
            value="name"
            id="searchByName"
          />
        </label>
        <label htmlFor="searchByLetter">
          first letter
          <input
            data-testid="first-letter-search-radio"
            type="radio"
            name="search"
            value="first-letters"
            id="searchByLetter"
          />
        </label>
      </div>
      <button
        data-testid="exec-search-btn"
        type="button"
        onClick={ () => handleClick() }
      >
        Search
      </button>
    </section>
  );
}

export default SearchBar;
