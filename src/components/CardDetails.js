import React from 'react';
import '../styles/CardDetails.css';
import CardRecommendedRecipe from './CardRecommendedRecipe';

function CardDetails() {
  return (
    <div className="cardDetails">
      <img
        data-testid="recipe-photo"
        alt=""
        src=""
        className="img-cardDetails"
      />

      <h3
        data-testid="recipe-title"
        className="title-cardDetails"
      >
        ...
      </h3>

      <button
        type="button"
        data-testid="share-btn"
        className="share-btn"
      >
        Compartilhar
      </button>

      <button
        type="button"
        data-testid="favorite-btn"
        className="favorite-btn"
      >
        Favoritar
      </button>

      <p
        data-testid="recipe-category"
        className="recipe-category"
      >
        Categoria
      </p>

      <ul
        data-testid={ `${index}-ingredient-name-and-measure` }
        className="ingredients-cardDetails"
      >
        <li />
      </ul>

      <ul
        data-testid="instructions"
        className="instructions"
      >
        <li />
      </ul>

      <video
        data-testid="video"
        className="video-cardDetails"
      >
        Video
        <track
          default
          kind="captions"
        />
      </video>

      <CardRecommendedRecipe />

      <button
        data-testid="start-recipe-btn"
        className="start-recipe-btn"
        type="button"
      >
        Start recipe
      </button>
    </div>
  );
}

export default CardDetails;
