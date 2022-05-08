import React, { useEffect, useState } from 'react';
import { getDrinkRecomend } from '../services';
import '../styles/CardDetails.css';
import '../styles/Carousel.css';

function CardRecommendedRecipe() {
  const [recomends, setRecomends] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const drinksRecomend = await getDrinkRecomend();
      const MAX_LENGTH = 6;
      const recomend = drinksRecomend.slice(0, MAX_LENGTH);
      setRecomends(recomend);
    };
    fetchApi();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <p>Recommended</p>
      <div className="container-recomend-recipe">
        {
          recomends && recomends.map((recomend, index) => (
            <div
              data-testid={ `${index}-recomendation-card` }
              key={ recomend.idDrink }
              id={ index }
              className="card-recomend-recipe"
            >
              <p
                data-testid={ `${index}-recomendation-title` }
              >
                {recomend.strDrink}
              </p>
              <img
                src={ recomend.strDrinkThumb }
                alt={ recomend.strDrink }
                className="img"
              />
            </div>))
        }
      </div>
    </>
  );
}

export default CardRecommendedRecipe;
