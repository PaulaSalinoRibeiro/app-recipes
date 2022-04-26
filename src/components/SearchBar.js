import React from 'react';

function SearchBar() {
  return (
    <section>
      <label htmlFor="searchByIngredients">
        Busca por Ingrediente
        <input
          data-testid="ingredient-search-radio"
          type="radio"
          id="searchByIngredients"
        />
      </label>
      Busca pelo nome
      <label htmlFor="searchByName">
        <input
          data-testid="name-search-radio"
          type="radio"
          id="searchByName"
        />
      </label>
      busca pela primeira letra
      <label htmlFor="searchByLetter">
        <input
          data-testid="first-letter-search-radio"
          type="radio"
          id="searchByLetter"
        />
      </label>
      <button
        data-testid="exec-search-btn"
        type="button"
      >
        Buscar
      </button>
    </section>
  );
}

export default SearchBar;
