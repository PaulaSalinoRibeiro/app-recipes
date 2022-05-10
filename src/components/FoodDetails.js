import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import copy from 'clipboard-copy';
import CardRecommendedRecipe from './CardRecommendedRecipe';
import { verifyIsDoneRecipe, verifyIsInProgressRecipe,
  favoriteFood } from '../helps/localStore';
import { getFoodById } from '../services';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import '../styles/CardDetails.css';

function FoodDetails() {
  const { id: ID } = useParams();
  const history = useHistory();
  const [foodDetails, setFoodDetails] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [measures, setMeasures] = useState([]);
  const [isDoneRecipe, setDoneRecipe] = useState(false);
  const [isContinue, setIsContinue] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const [isCopy, setCopy] = useState(false);

  useEffect(() => {
    const fetchApiById = async () => {
      const res = await getFoodById(ID);
      setFoodDetails(res[0]);
    };
    fetchApiById();
    setDoneRecipe(verifyIsDoneRecipe(ID));
    setIsContinue(verifyIsInProgressRecipe(ID, 'meals'));
    const saveDrink = JSON.parse(localStorage.getItem('favoriteRecipes'));
    const isFavorite = saveDrink?.some((recipe) => recipe.id === ID);
    setFavorite(isFavorite);
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

  const handleFavorite = () => {
    favoriteFood(foodDetails);
    const saveDrink = JSON.parse(localStorage.getItem('favoriteRecipes'));
    const isFavorite = saveDrink.some((recipe) => recipe.id === ID);
    setFavorite(isFavorite);
  };

  const handleCopy = () => {
    copy(`http://localhost:3000/foods/${ID}`);
    setCopy(!isCopy);
  };

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
            onClick={ () => handleCopy() }
          >
            { isCopy ? 'Link copied!' : 'Compartilhar'}
          </button>

          {
            !favorite ? (
              <button
                type="button"
                onClick={ () => handleFavorite() }
                data-testid="favorite-btn"
                className="favorite-btn"
                src={ whiteHeartIcon }
              >
                <img src={ whiteHeartIcon } alt="favorite" />
              </button>
            ) : (
              <button
                type="button"
                onClick={ () => handleFavorite() }
                data-testid="favorite-btn"
                className="favorite-btn"
                src={ blackHeartIcon }
              >
                <img src={ blackHeartIcon } alt="favorite" />
              </button>
            )
          }

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
                className="item-list-ingredients"
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

        <CardRecommendedRecipe />

        <div className="div-video">
          <iframe
            allowFullScreen
            data-testid="video"
            className="video-cardDetails"
            width="95%"
            height="auto"
            src={ (foodDetails?.strYoutube)?.replace('watch?v=', 'embed/') }
            title="Video receita"
          />
        </div>
        {
          !isDoneRecipe && (
            <button
              data-testid="start-recipe-btn"
              className="start-recipe-btn"
              type="button"
              onClick={ () => history.push(`${ID}/in-progress`) }
            >
              { isContinue ? 'Continue Recipe' : 'Start recipe' }
            </button>
          )
        }
      </div>
    </div>
  );
}

export default FoodDetails;
