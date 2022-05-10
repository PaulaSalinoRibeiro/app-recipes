import React from 'react';
import { screen } from '@testing-library/react';
import { Provider } from 'react-redux';
// import userEvent from '@testing-library/user-event';
import store from '../Redux/store';
import renderWithRouter from './renderWithRouter';
import DetailsRecepiesFoods from '../pages/DetailsRecepiesFoods';
import DetailsRecepiesDrinks from '../pages/DetailsRecepiesDrinks';

const RECIPE_PHOTO = 'recipe-photo';
const RECIPE_TITLE = 'recipe-title';
const SHARE_BTN = 'share-btn';
const FAVORITE_BTN = 'favorite-btn';
const RECIPE_CATEGORY = 'recipe-category';

function renderiraTela() {
  const recipePhoto = screen.queryByTestId(RECIPE_PHOTO);
  const recipeTitle = screen.queryByTestId(RECIPE_TITLE);
  const shareBtn = screen.queryByTestId(SHARE_BTN);
  const favoriteBtn = screen.queryByTestId(FAVORITE_BTN);
  const recipeCategory = screen.queryByTestId(RECIPE_CATEGORY);

  return {
    recipePhoto,
    recipeTitle,
    shareBtn,
    favoriteBtn,
    recipeCategory,
  };
}

describe('Testa a implementação dos elementos da tela de detalhes de uma receita', () => {
  test('A tela de comida possui todos os atributos data-testid', () => {
    renderWithRouter(
      <Provider store={ store }>
        <DetailsRecepiesFoods />
      </Provider>,
      '/foods/52771',
    );

    const {
      recipePhoto,
      recipeTitle,
      shareBtn,
      favoriteBtn,
      recipeCategory,
    } = renderiraTela();

    expect(recipePhoto).not.toBeNull();
    expect(recipeTitle).not.toBeNull();
    expect(shareBtn).not.toBeNull();
    expect(favoriteBtn).not.toBeNull();
    expect(recipeCategory).not.toBeNull();
  });

  test('A tela de bebida possui todos os atributos data-testid', () => {
    renderWithRouter(
      <Provider store={ store }>
        <DetailsRecepiesDrinks />
      </Provider>,
      '/drinks/178319',
    );

    const {
      recipePhoto,
      recipeTitle,
      shareBtn,
      favoriteBtn,
      recipeCategory,
    } = renderiraTela();

    expect(recipePhoto).not.toBeNull();
    expect(recipeTitle).not.toBeNull();
    expect(shareBtn).not.toBeNull();
    expect(favoriteBtn).not.toBeNull();
    expect(recipeCategory).not.toBeNull();
  });
});
