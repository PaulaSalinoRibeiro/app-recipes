import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import DrinkDetails from '../components/DrinkDetails';
import { getFoodsRecomend } from '../services';
import { actionDrinkRecomend } from '../Redux/actions';

function DetailsRecepiesDrinks() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchApi = async () => {
      const foodsRecomend = await getFoodsRecomend();
      console.log('retorno api', foodsRecomend);
      dispatch(actionDrinkRecomend(foodsRecomend));
    };
    fetchApi();
  }, []);
  return (
    <DrinkDetails />
  );
}

export default DetailsRecepiesDrinks;
