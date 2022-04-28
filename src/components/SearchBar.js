import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getByIngridientFoods, getByNameFoods, getByFirstLetterFoods,
  getByIngridientDrinks, getByNameDrinks, getByFirstLetterDrinks } from '../services';
import '../styles/SearchBar.css';

function SearchBar() {
  const [searchInput, setSearchInput] = useState('');
  const [search, setSearch] = useState('');

  const history = useHistory();

  const handleClick = async () => {
    console.log(searchInput);
    console.log(search);

    if (search === 'first-letters' && search.length > 0) {
      return global.alert('Your search must have only 1 (one) character');
    }

    console.log(history.location.pathname);

    if (history.location.pathname === '/foods') {
      if (search === 'ingredient') {
        const ingridientsFoods = await getByIngridientFoods(searchInput);
        console.log(ingridientsFoods);
      } else if (search === 'name') {
        const nameFoods = await getByNameFoods(searchInput);
        console.log(nameFoods);
      } else {
        const letterFoods = await getByFirstLetterFoods(searchInput);
        console.log(letterFoods);
      }
    }

    if (history.listen.pathname === '/drinks') {
      if (search === 'ingredient') {
        const ingridientDrinks = await getByIngridientDrinks(searchInput);
        console.log(ingridientDrinks);
      } else if (search === 'name') {
        const nameDrinks = await getByNameDrinks(searchInput);
        console.log(nameDrinks);
      } else {
        const letterDrinks = await getByFirstLetterDrinks(searchInput);
        console.log(letterDrinks);
      }
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
