import React from 'react';
import '../styles/DetailsRecepie.css';

function DetailsRecepie() {
  const video = 'url do video';
  return (
    <div>
      <img
        src=""
        alt=""
        data-testid="recipe-photo"
      />

      <h3 data-testid="recipe-title"> Título da receita</h3>

      <button type="button" data-testid="share-btn">
        Compartilhar
      </button>

      <button type="button" data-testid="favorite-btn">
        Favoritar
      </button>

      <h4 data-testid="recipe-category">
        Categoria
      </h4>

      <ul>
        <li data-testid={ `${index}-ingredient-name-and-measure` }>
          Ingredientes
        </li>
      </ul>

      <p data-testid="instructions">
        Instruções
      </p>

      { video && (
        <video
          data-testid="video"
          controls
          src=""
        >
          <track
            default
            kind="captions"
            srcLang=""
            src=""
          />
        </video>
      )}

      <section className="cardRecepies">
        <article data-testid={ `${index}-recomendation-card` }>
          Receitas recomendadas
        </article>
      </section>

      <button type="button" data-testid="start-recipe-btn">
        Iniciar receita
      </button>

    </div>
  );
}

export default DetailsRecepie;
