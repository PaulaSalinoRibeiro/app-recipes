import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import copy from 'clipboard-copy';
import { getDrinkById } from '../services';
import { verifyIsDoneRecipe, verifyIsInProgressRecipe,
  favoriteDrink } from '../helps/localStore';
import CardRecommendedDrinks from './CardRecommendedDrinks';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import '../styles/CardDetails.css';

function DrinkDetails() {
  const { id: ID } = useParams();
  const history = useHistory();
  const [drinkDetails, setDrinkDetails] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [measures, setMeasures] = useState([]);
  const [isDoneRecipe, setIsDoneRecipe] = useState(false);
  const [isContinue, setIsContinue] = useState(false);
  const [isCopy, setCopy] = useState(false);
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    const fetchApiById = async () => {
      const res = await getDrinkById(ID);
      setDrinkDetails(res[0]);
    };
    fetchApiById();
    setIsDoneRecipe(verifyIsDoneRecipe(ID));
    setIsContinue(verifyIsInProgressRecipe(ID, 'cocktails'));
    const saveDrink = JSON.parse(localStorage.getItem('favoriteRecipes'));
    const isFavorite = saveDrink?.some((recipe) => recipe.id === ID);
    setFavorite(isFavorite);

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

  const handleClick = () => {
    history.push(`${ID}/in-progress`);
  };

  const handleCopy = () => {
    copy(`http://localhost:3000/drinks/${ID}`);
    setCopy(!isCopy);
  };

  const handleFavorite = () => {
    favoriteDrink(drinkDetails);
    const saveDrink = JSON.parse(localStorage.getItem('favoriteRecipes'));
    const isFavorite = saveDrink?.some((recipe) => recipe.id === ID);
    setFavorite(isFavorite);
  };

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
          { drinkDetails?.strAlcoholic }
        </p>

        <div className="div-lista-ingredientes">
          <ul className="ingredients-cardDetails">
            { ingredients
            && ingredients.map(([, ingredient], index) => ingredient && (
              <li
                data-testid={ `${index}-ingredient-name-and-measure` }
                key={ index }
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

        <CardRecommendedDrinks />

        <div className="div-video">
          <iframe
            allowFullScreen
            data-testid="video"
            className="video-cardDetails"
            width="95%"
            height="auto"
            src={ (drinkDetails?.strYoutube)?.replace('watch?v=', 'embed/') }
            title="Video receita"
          />
        </div>

        {
          !isDoneRecipe && (
            <button
              data-testid="start-recipe-btn"
              className="start-recipe-btn"
              onClick={ () => handleClick() }
              type="button"
            >
              { isContinue ? 'Continue Recipe' : 'Start recipe' }
            </button>
          )
        }
      </div>
    </div>
  );
}

export default DrinkDetails;
