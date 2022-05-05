import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function CardRecommendedDrinks() {
  const { foodRecomend } = useSelector(({ saveFoods }) => saveFoods);
  const [recomends, setRecomends] = useState([]);
  useEffect(() => {
    const MAX_LENGTH = 6;
    const recomend = foodRecomend.slice(0, MAX_LENGTH);
    setRecomends(recomend);
  });
  return (
    <>
      <p>Recommended</p>
      <div className="container-recomend-recipe">
        {
          recomends && recomends.map((recomend, index) => (
            <div
              data-testid={ `${index}-recomendation-card` }
              key={ recomend.idFood }
              id={ index }
              className="card-recomend-recipe"
            >
              <img
                src={ recomend.strFoodThumb }
                alt={ recomend.strFood }
              />
              <p>Dessert</p>
              <p>title</p>
            </div>
          ))
        }
      </div>
    </>
  );
}

export default CardRecommendedDrinks;
