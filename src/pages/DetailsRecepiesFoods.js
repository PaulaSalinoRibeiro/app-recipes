import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import FoodDetails from '../components/FoodDetails';
import { getDrinkRecomend } from '../services';
import { actionDrinkRecomend } from '../Redux/actions';
import '../styles/CardDetails.css';

function DetailsRecepiesFoods() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchApi = async () => {
      const drinksRecomend = await getDrinkRecomend();
      dispatch(actionDrinkRecomend(drinksRecomend));
    };
    fetchApi();
  }, []);
  return (
    <FoodDetails />
  );
}

export default DetailsRecepiesFoods;
