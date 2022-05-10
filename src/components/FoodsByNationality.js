import React, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getFoodNationalitys, getFoods, getFoodsByArea } from '../services';
import '../styles/Explore.css';
import '../styles/Foods.css';

function FoodsByNationality() {
  const [nationalitys, setNationalitys] = useState();
  const [recipes, setRecipes] = useState();
  const [defaultRecipes, setDefaultRecipes] = useState();
  const history = useHistory();
  const MAX_LENGTH = 12;

  useEffect(() => {
    const FetchNationalitys = async () => {
      const res = await getFoodNationalitys();
      const { meals } = await getFoods();
      setNationalitys(res);
      setRecipes(meals.slice(0, MAX_LENGTH));
      setDefaultRecipes(meals.slice(0, MAX_LENGTH));
    }; FetchNationalitys();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = async ({ target }) => {
    const nationality = target.value;
    if (nationality !== 'all') {
      const res = await getFoodsByArea(nationality);
      setRecipes(res.slice(0, MAX_LENGTH));
    } else {
      setRecipes(defaultRecipes);
    }
  };

  return (
    <div>
      <div className="div-selector">
        <select
          onChange={ (event) => handleChange(event) }
          data-testid="explore-by-nationality-dropdown"
          name="nationalitys"
        >
          <option
            value="all"
            data-testid="All-option"
          >
            All
          </option>

          {nationalitys && nationalitys.map(({ strArea }, index) => (
            <option
              // role="dialog"
              key={ index }
              data-testid={ `${strArea}-option` }
              value={ strArea }
            >
              {strArea}
            </option>
          ))}
        </select>
      </div>
      <div className="div-foods">
        {recipes && recipes.map(({ idMeal, strMeal, strMealThumb }, index) => (
          <div
            onClick={ () => history.push(`/foods/${idMeal}`) }
            aria-hidden="true"
            key={ idMeal }
            data-testid={ `${index}-recipe-card` }
            className="renderRecipes"
          >
            <img
              data-testid={ `${index}-card-img` }
              src={ strMealThumb }
              alt={ strMeal }
              className="food-img"
            />
            <p
              data-testid={ `${index}-card-name` }
              className="recepie-name"
            >
              {strMeal}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default FoodsByNationality;
