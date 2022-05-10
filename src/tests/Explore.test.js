import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouterAndStore from './renderWithRouterAndStore';
import App from '../App';

describe('Testa página Explore', () => {
  it('verifica elementos da página', () => {
    const { history } = renderWithRouterAndStore(<App />);
    history.push('/explore');
    const btnFood = screen.getByTestId('explore-foods');
    const btnDrink = screen.getByTestId('explore-drinks');

    expect(btnFood).toBeInTheDocument();
    expect(btnDrink).toBeInTheDocument();
  });
});
