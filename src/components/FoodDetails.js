import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
// import CardRecommendedRecipe from './CardRecommendedRecipe';
import { getFoodById } from '../services';
import '../styles/CardDetails.css';

function FoodDetails() {
  const { location: pathname } = useHistory();
  const [foodDetails, setFoodDetails] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [measures, setMeasures] = useState([]);

  useEffect(() => {
    const fetchApiById = async () => {
      let id = pathname.pathname;
      id = id.replace(/[^0-9]/g, '');
      const res = await getFoodById(id);
      console.log(res);
      setFoodDetails(res[0]);
    };
    fetchApiById();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const MIN_LENGTH = 9;
    const MAX_LENGTH = 29;
    const START_MEASURE = 29;
    const END_MEASURE = 49;
    const ingredient = Object.values(foodDetails).slice(MIN_LENGTH, MAX_LENGTH);
    setIngredients(ingredient);
    const measure = Object.values(foodDetails).slice(START_MEASURE, END_MEASURE);
    setMeasures(measure);
  }, [foodDetails]);

  return (
    <div className="cardDetails-page">
      <div className="cardDetails">
        <img
          data-testid="recipe-photo"
          alt={ foodDetails?.strMeal }
          src={ foodDetails?.strMealThumb }
          className="img-cardDetails"
        />

        <h3
          data-testid="recipe-title"
          className="title-cardDetails"
        >
          { foodDetails?.strMeal }
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
          { foodDetails?.strCategory }
        </p>

        <div className="div-lista-ingredientes">

          <ul className="ingredients-cardDetails">
            {ingredients
            && ingredients.map((ingredient, index) => ingredient && (
              <li
                data-testid={ `${index}-ingredient-name-and-measure` }
                key={ index }
              >
                {`${ingredient} - ${measures[index]}`}
              </li>
            ))}
          </ul>
        </div>

        <p
          data-testid="instructions"
          className="instructions"
        >
          { foodDetails?.strInstructions }
        </p>
        <div className="div-video">
          <iframe
            allowFullScreen
            data-testid="video"
            className="video-cardDetails"
            width="95%"
            height="auto"
            src={ (foodDetails?.strYoutube)?.replace('watch', 'embed') }
            title="Video receita"
          />
        </div>
        {/* {console.log((foodDetails?.strYoutube)?.replace('watch', 'embed'))} */}

        {/* <CardRecommendedRecipe /> */}

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

// minajuda

export default FoodDetails;
