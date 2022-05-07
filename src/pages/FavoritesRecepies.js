import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

import '../styles/FavoriteRecipe.css';

function FavoritesRecepies() {
  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
    console.log(favorites);
    setFavorite(favorites);
  }, []);

  const handleFilter = ({ target }) => {
    console.log(target.id);
    if (target.id === 'All') {
      const favorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
      setFavorite(favorites);
    } else {
      const favorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
      const filter = favorites.filter(({ type }) => type === target.id);
      console.log(filter);
      setFavorite(filter);
    }
  };

  const handleShare = () => {
    //
  };

  const handleFavorite = ({ target }) => {
    console.log(target.id);
    const removeFavorite = favorite.filter(({ id }) => id !== target.id);
    setFavorite(removeFavorite);
  };

  return (
    <div>
      <Header
        text="
        Favorite Recipes"
      />
      <div className="container-btn-filter">
        <button
          type="button"
          id="All"
          data-testid="filter-by-all-btn"
          onClick={ (e) => handleFilter(e) }
        >
          All
        </button>
        <button
          type="button"
          id="food"
          data-testid="filter-by-food-btn"
          onClick={ (e) => handleFilter(e) }

        >
          Food
        </button>
        <button
          type="button"
          id="drink"
          data-testid="filter-by-drink-btn"
          onClick={ (e) => handleFilter(e) }
        >
          Drink
        </button>
      </div>
      <div className="container-favorite-recipes">
        {
          favorite.map((recipe, index) => (
            <div key={ recipe.id } className="container-favorite-card">
              <img
                src={ recipe.image }
                alt={ recipe.name }
                data-testid={ `${index}-horizontal-image` }
              />

              <span data-testid={ `${index}-horizontal-top-text` }>
                { recipe.type === 'food'
                  ? `${recipe.nationality} - ${recipe.category}`
                  : recipe.alcoholicOrNot }
              </span>
              <span data-testid={ `${index}-horizontal-name` }>
                {recipe.name}
              </span>
              <button
                className="btn-favorite-share"
                type="button"
                id={ recipe.id }
                data-testid={ `${index}-horizontal-share-btn` }
                src={ shareIcon }
                onClick={ () => handleShare() }
              >
                <img src={ shareIcon } alt="compartilhar" />
              </button>
              <button
                className="btn-favorite-heart"
                type="button"
                id={ recipe.id }
                data-testid={ `${index}-horizontal-favorite-btn` }
                src={ blackHeartIcon }
                onClick={ (e) => handleFavorite(e) }
              >
                <img
                  src={ blackHeartIcon }
                  alt="favorite"
                />
              </button>

            </div>
          ))
        }
      </div>
    </div>
  );
}

export default FavoritesRecepies;
