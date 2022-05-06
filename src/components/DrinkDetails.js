import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getDrinkById } from '../services';
import { verifyIsDoneRecipe, verifyIsInProgressRecipe } from '../helps/localStore';
import CardRecommendedDrinks from './CardRecommendedDrinks';
import '../styles/CardDetails.css';

function DrinkDetails() {
  const { location: pathname } = useHistory([]);
  const history = useHistory();
  const [drinkDetails, setDrinkDetails] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [measures, setMeasures] = useState([]);
  const [isDoneRecipe, setIsDoneRecipe] = useState(false);
  const [isContinue, setIsContinue] = useState(false);
  let id = pathname.pathname;

  useEffect(() => {
    const fetchApiById = async () => {
      id = id.replace(/[^0-9]/g, '');
      const res = await getDrinkById(id);
      setDrinkDetails(res[0]);
    };
    fetchApiById();
    setIsDoneRecipe(verifyIsDoneRecipe(id));
    setIsContinue(verifyIsInProgressRecipe(id, 'cocktails'));
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
    history.push(`${id}/in-progress`);
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
            src={ (drinkDetails?.strYoutube)?.replace('watch', 'embed') }
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
