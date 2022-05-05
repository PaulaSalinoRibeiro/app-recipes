import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getDrinkById } from '../services';
import CardRecommendedDrinks from './CardRecommendedDrinks';
import '../styles/CardDetails.css';

function DrinkDetails() {
  const { location: pathname } = useHistory([]);
  const [drinkDetails, setDrinkDetails] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [measures, setMeasures] = useState([]);

  useEffect(() => {
    const fetchApiById = async () => {
      let id = pathname.pathname;
      id = id.replace(/[^0-9]/g, '');
      const res = await getDrinkById(id);
      setDrinkDetails(res[0]);
    };
    fetchApiById();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const ingridientAndMesure = Object.entries(drinkDetails);
    const allIngredient = ingridientAndMesure
      .filter(([ingredient]) => ingredient.includes('strIngredient'));
    setIngredients(allIngredient);
    const allMeasure = ingridientAndMesure
      .filter(([measure]) => measure.includes('strMeasure'));
    setMeasures(allMeasure);
  }, [drinkDetails]);

  return (
    <div className="cardDetails-page">
      <div className="cardDetails">
        <img
          data-testid="recipe-photo"
          alt={ drinkDetails?.strDrink }
          src={ drinkDetails?.strDrinkThumb }
          className="img-cardDetails"
        />

        <h3
          data-testid="recipe-title"
          className="title-cardDetails"
        >
          { drinkDetails?.strDrink }
        </h3>

        <div className="div-buttons">
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
        </div>

        <p
          data-testid="recipe-category"
          className="recipe-category"
        >
          { drinkDetails?.strCategory }
        </p>

        <div className="div-lista-ingredientes">
          <ul className="ingredients-cardDetails">
            {ingredients?.map(([strIngredient, ingredient], index) => ingredient && (
              <li
                data-testid={`${index}-ingredient-name-and-measure`}
                key={index}
              >
                {`${ingredient} - ${measures[index][1]}`}
              </li>
            ))}
          </ul>
        </div>

        <p
          data-testid="instructions"
          className="instructions"
        >
          { drinkDetails?.strInstructions }
        </p>
        <div className="div-video">
          <iframe
            allowFullScreen
            data-testid="video"
            className="video-cardDetails"
            width="95%"
            height="auto"
            src={ (drinkDetails?.strYoutube)?.replace('watch', 'embed') }
            title="Video receita"
          />
        </div>

        <CardRecommendedDrinks />

        <button
          data-testid="start-recipe-btn"
          className="start-recipe-btn"
          type="button"
        >
          Start recipe
        </button>
      </div>
    </div>
  );
}

export default DrinkDetails;
