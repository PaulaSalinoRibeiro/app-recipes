import React from 'react';
import '../styles/CardDetails.css';

function CardRecommendedRecipe() {
  return (
    <div className="div-recomendacoes">

      <p
        data-testid={ `${index}-recomendation-card` }
        className="recomendation-card"
      >
        Recommended
      </p>

      <div className="div-recomendation-card">
        <img
          alt=""
          src=""
          className="img-card-recommended"
        />

        <p
          className="category-alcoholic"
        >
          Alcoholic
        </p>

        <p
          className="title-recomend"
        >
          Titulo recomendação
        </p>
      </div>

    </div>
  );
}

export default CardRecommendedRecipe;
