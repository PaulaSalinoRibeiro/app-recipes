import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouterAndStore from './renderWithRouterAndStore';
import App from '../App';

const favorite = [{
  id: '52771',
  type: 'food',
  nationality: 'Italian',
  category: 'Vegetarian',
  alcoholicOrNot: '',
  name: 'Spicy Arrabiata Penne',
  image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
}];

beforeEach(() => {
  const { history } = renderWithRouterAndStore(<App />);
  history.push('/favorite-recipes');
});

describe('Testa pagina FavoriteRecipe', () => {
  it('verifica botões na tela', () => {
    const btnAll = screen.getByTestId('filter-by-all-btn');
    const btnFood = screen.getByTestId('filter-by-food-btn');
    const btnDrink = screen.getByTestId('filter-by-drink-btn');

    expect(btnAll).toBeInTheDocument();
    expect(btnFood).toBeInTheDocument();
    expect(btnDrink).toBeInTheDocument();
  });

  it('verifica card na tela', async () => {
    localStorage.setItem('favoriteRecipes', JSON.stringify(favorite));

    const img = await screen.findAllByTestId(/horizontal-image/i);
    const shareBtn = await screen.findAllByTestId(/horizontal-share-btn/i);
    const favoriteBtn = await screen.findAllByTestId(/horizontal-favorite-btn/i);
    const categories = await screen.findAllByTestId(/-horizontal-top-text/i);
    const title = await screen.findAllByTestId(/horizontal-name/i);

    expect(img).toHaveLength(1);
    expect(shareBtn).toHaveLength(1);
    expect(favoriteBtn).toHaveLength(1);
    expect(categories).toHaveLength(1);
    expect(title).toHaveLength(1);
  });

  it('verifica se clicar no botão Drinks ocorre o filtro', async () => {
    const btnDrink = screen.getByTestId('filter-by-drink-btn');
    const img = await screen.findByTestId(/horizontal-image/i);
    userEvent.click(btnDrink);
    expect(img).not.toBeInTheDocument();
  });
});
