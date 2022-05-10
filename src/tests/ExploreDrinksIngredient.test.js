import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouterAndStore from './renderWithRouterAndStore';
import mockIngrediendDrink from './Mocks/ingredientDrink';

beforeEach(() => {
  global.fetch = jest.fn().mockImplementation((url) => {
    if (url === 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list') {
      return Promise.resolve({
        json: jest.fn().mockResolvedValue(mockIngrediendDrink),
      });
    }
  });
});

describe('Teste página ExploreDrinkIngredient', () => {
  it('verifica elementos na página', async () => {
    const { history } = renderWithRouterAndStore(<App />);
    history.push('/explore/drinks/ingredients');
    const card = await screen.findAllByTestId('0-ingredient-card');
    const img = await screen.findAllByTestId('0-card-img');
    expect(card).toHaveLength(1);
    expect(img).toHaveLength(1);
  });
});
