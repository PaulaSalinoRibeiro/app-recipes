import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import copy from 'clipboard-copy';
import Header from '../components/Header';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

import '../styles/FavoriteRecipe.css';

function FavoritesRecepies() {
  const history = useHistory();
  const [favorite, setFavorite] = useState([]);
  const [isCopy, setIsCopy] = useState('');

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
    setFavorite(favorites);
  }, []);

  const handleFilter = ({ target }) => {
    if (target.id === 'All') {
      const favorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
      setFavorite(favorites);
    } else {
      const favorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
      const filter = favorites.filter(({ type }) => type === target.id);
      setFavorite(filter);
    }
  };

  const handleShare = ({ target }) => {
    copy(`http://localhost:3000/${target.id}`);
    setIsCopy(target.id);
  };

  const handleFavorite = ({ target }) => {
    const removeFavorite = favorite.filter(({ id }) => id !== target.id);
    localStorage.setItem('favoriteRecipes', JSON.stringify(removeFavorite));
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
          favorite && favorite.map((recipe, index) => (
            <div key={ recipe.id } className="container-favorite-card">
              <div className="container-favorite-image-text">
                <div
                  aria-hidden="true"
                  onClick={ () => history.push(`${recipe.type}s/${recipe.id}`) }
                >
                  <img
                    src={ recipe.image }
                    alt={ recipe.name }
                    data-testid={ `${index}-horizontal-image` }
                  />
                </div>

                <span data-testid={ `${index}-horizontal-top-text` }>
                  { recipe.type === 'food'
                    ? `${recipe.nationality} - ${recipe.category}`
                    : recipe.alcoholicOrNot }
                </span>
                <span
                  aria-hidden="true"
                  data-testid={ `${index}-horizontal-name` }
                  onClick={ () => history.push(`${recipe.type}s/${recipe.id}`) }
                >
                  {recipe.name}
                </span>
              </div>
              <div className="container-favorite-btns">

                <button
                  className="btn-favorite-share"
                  type="button"
                  id={ `${recipe.type}s/${recipe.id}` }
                  data-testid={ `${index}-horizontal-share-btn` }
                  onClick={ (e) => handleShare(e) }
                  src={ shareIcon }
                >
                  {
                    isCopy === `${recipe.type}s/${recipe.id}`
                      ? 'Link copied!' : 'Compartilhar'
                  }
                </button>
                <button
                  className="btn-favorite-heart"
                  type="button"
                  id={ recipe.id }
                  data-testid={ `${index}-horizontal-favorite-btn` }
                  src={ blackHeartIcon }
                  onClick={ (e) => handleFavorite(e) }
                >
                  Favorite
                </button>
              </div>

            </div>
          ))
        }
      </div>
    </div>
  );
}

export default FavoritesRecepies;
