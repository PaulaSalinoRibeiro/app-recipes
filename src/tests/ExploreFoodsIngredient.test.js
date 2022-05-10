import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouterAndStore from './renderWithRouterAndStore';
import mockIngrediendFood from './Mocks/ingredientFood';

beforeEach(() => {
  global.fetch = jest.fn().mockImplementation((url) => {
    if (url === 'https://www.themealdb.com/api/json/v1/1/list.php?i=list') {
      return Promise.resolve({
        json: jest.fn().mockResolvedValue(mockIngrediendFood),
      });
    }
  });
});

describe('Teste página ExploreFoodIngredient', () => {
  it('verifica elementos na página', async () => {
    const { history } = renderWithRouterAndStore(<App />);
    history.push('/explore/foods/ingredients');
    const card = await screen.findAllByTestId('0-ingredient-card');
    const img = await screen.findAllByTestId('0-card-img');
    expect(card).toHaveLength(1);
    expect(img).toHaveLength(1);
  });
});
