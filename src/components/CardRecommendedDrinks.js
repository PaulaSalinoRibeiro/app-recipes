import React, { useEffect, useState } from 'react';
import { getFoodsRecomend } from '../services';
import '../styles/CardDetails.css';
import '../styles/Carousel.css';

function CardRecommendedDrinks() {
  const [recomends, setRecomends] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const foodsRecomend = await getFoodsRecomend();
      const MAX_LENGTH = 6;
      const recomend = foodsRecomend.slice(0, MAX_LENGTH);
      setRecomends(recomend);
      console.log(recomend);
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
              key={ recomend.idMeal }
              id={ index }
              className="card-recomend-recipe"
            >
              <p
                data-testid={ `${index}-recomendation-title` }
              >
                {recomend.strMeal}
              </p>
              <img
                src={ recomend.strMealThumb }
                alt={ recomend.strMeal }
              />
            </div>
          ))
        }
      </div>
    </>
  );
}

export default CardRecommendedDrinks;
