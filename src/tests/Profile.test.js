import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouterAndStore from './renderWithRouterAndStore';

describe('Teste da pagina de Profile', () => {
  const EMAIL = 'profile-email';
  const DONE_RECIPE = 'profile-done-btn';
  const FAVORITE_RECIPE = 'profile-favorite-btn';
  const LOGOUT = 'profile-logout-btn';

  it('deve ter o email e botões na tela', () => {
    const { history } = renderWithRouterAndStore(<App />);
    history.push('/profile');
    const email = screen.getByTestId(EMAIL);
    const doneRecipes = screen.getByTestId(DONE_RECIPE);
    const favoriteRecipes = screen.getByTestId(FAVORITE_RECIPE);
    const logout = screen.getByTestId(LOGOUT);

    expect(email).toBeInTheDocument();
    expect(doneRecipes).toBeInTheDocument();
    expect(favoriteRecipes).toBeInTheDocument();
    expect(logout).toBeInTheDocument();
  });

  it('verifica rota para Done Recipes', () => {
    const { history } = renderWithRouterAndStore(<App />);
    history.push('/profile');
    const doneRecipes = screen.getByTestId(DONE_RECIPE);
    userEvent.click(doneRecipes);
    expect(history.location.pathname).toBe('/done-recipes');
  });

  it('verifica rota para Favorite Recipes', () => {
    const { history } = renderWithRouterAndStore(<App />);
    history.push('/profile');
    const favoriteRecipes = screen.getByTestId(FAVORITE_RECIPE);
    userEvent.click(favoriteRecipes);
    expect(history.location.pathname).toBe('/favorite-recipes');
  });

  it('verifica rota para Logout', () => {
    const { history } = renderWithRouterAndStore(<App />);
    history.push('/profile');
    const logout = screen.getByTestId(LOGOUT);
    userEvent.click(logout);
    expect(history.location.pathname).toBe('/');
  });
});
