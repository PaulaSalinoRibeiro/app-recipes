import React from 'react';
import { Provider } from 'react-redux';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import store from '../Redux/store';
import renderWithRouter from './renderWithRouter';
import Foods from '../pages/Foods';
import ExploreDrinkIngredients from '../pages/ExploreDrinkIngredients';
import ExploreNationality from '../pages/ExploreNationality';
import Profile from '../pages/Profile';
import FavoritesRecepies from '../pages/FavoritesRecepies';

describe('Teste os ícones e o funcionamento do header', () => {
  const SEARCH_TOP_BTN = 'search-top-btn';
  const PROFILE_TOP_BTN = 'profile-top-btn';
  const PAGE_TITLE = 'page-title';
  const SEARCH_INPUT = 'search-input';
  const SEARCH_INGREDIENT = 'ingredient-search-radio';
  const SEARCH_NAME = 'name-search-radio';
  const SEARCH_FIRST_LETTER = 'first-letter-search-radio';
  const SEARCH_EXEC = 'exec-search-btn';

  function auxiliar() {
    const headerTitle = screen.queryByTestId(PAGE_TITLE);
    const headerProfileTopBtn = screen.queryByTestId(PROFILE_TOP_BTN);
    const headerSearchTopBtn = screen.queryByTestId(SEARCH_TOP_BTN);
    const searchInput = screen.queryByTestId(SEARCH_INPUT);
    const searchIngredient = screen.queryByTestId(SEARCH_INGREDIENT);
    const searchName = screen.queryByTestId(SEARCH_NAME);
    const searchFirstLetter = screen.queryByTestId(SEARCH_FIRST_LETTER);
    const searchExec = screen.queryByTestId(SEARCH_EXEC);

    return {
      headerTitle,
      headerProfileTopBtn,
      headerSearchTopBtn,
      searchInput,
      searchIngredient,
      searchName,
      searchFirstLetter,
      searchExec,
    };
  }

  test(
    'O header tem os ícones corretos na tela de explorar bebida por ingrediente',
    () => {
      renderWithRouter(
        <Provider store={ store }>
          <ExploreDrinkIngredients />
        </Provider>,
        '/explore/drinks/ingredients',
      );

      const { headerTitle, headerProfileTopBtn } = auxiliar();

      expect(headerTitle).toBeInTheDocument();
      expect(headerProfileTopBtn).toBeInTheDocument();
      // expect(headerSearchTopBtn).not.toBeInTheDocument();
    },
  );

  test(
    'O header tem os ícones corretos na tela de explorar comidas por nacionalidade',
    () => {
      renderWithRouter(
        <Provider store={ store }>
          <ExploreNationality />
        </Provider>,
        '/explore/foods/nationalities',
      );

      const { headerTitle, headerProfileTopBtn, headerSearchTopBtn } = auxiliar();

      expect(headerTitle).toBeInTheDocument();
      expect(headerProfileTopBtn).toBeInTheDocument();
      expect(headerSearchTopBtn).toBeInTheDocument();
    },
  );

  test(
    'O header tem os ícones corretos na tela de perfil',
    () => {
      renderWithRouter(
        <Provider store={ store }>
          <Profile />
        </Provider>,
        '/profile',
      );

      const { headerTitle, headerProfileTopBtn } = auxiliar();

      expect(headerTitle).toBeInTheDocument();
      expect(headerProfileTopBtn).toBeInTheDocument();
      // expect(headerSearchTopBtn).not.toBeInTheDocument();
    },
  );

  test(
    'O header tem os ícones corretos na tela de receitas favoritas',
    () => {
      renderWithRouter(
        <Provider store={ store }>
          <FavoritesRecepies />
        </Provider>,
        '/favorite-recipes',
      );

      const { headerTitle, headerProfileTopBtn } = auxiliar();

      expect(headerTitle).toBeInTheDocument();
      expect(headerProfileTopBtn).toBeInTheDocument();
      // expect(headerSearchTopBtn).not.toBeInTheDocument();
    },
  );

  test(
    'Redirecione a pessoa usuária para a tela de perfil ao clicar no botão de perfil',
    () => {
      const { history } = renderWithRouter(
        <Provider store={ store }>
          <Foods />
        </Provider>,
        '/foods',
      );
      const { headerProfileTopBtn } = auxiliar();

      userEvent.click(headerProfileTopBtn);
      expect(history.location.pathname).toBe('/profile');
    },
  );

  test('Ao clicar no botão de busca a barra de pesquisa deve aparecer', async () => {
    renderWithRouter(
      <Provider store={ store }>
        <Foods />
      </Provider>,
      '/foods',
    );

    const { headerSearchTopBtn } = auxiliar();

    userEvent.click(headerSearchTopBtn);

    const searchBar = await screen.queryByTestId(SEARCH_INPUT);

    expect(searchBar).toBeInTheDocument();
  });

  test(
    'Ao clicar novamente no botão de busca a barra de pesquisa deve desaparecer',
    () => {
      renderWithRouter(
        <Provider store={ store }>
          <Foods />
        </Provider>,
        '/foods',
      );

      const { headerSearchTopBtn } = auxiliar();

      userEvent.click(headerSearchTopBtn);
      userEvent.click(headerSearchTopBtn);

      const searchBar = screen.queryByTestId(SEARCH_INPUT);
      const searchIngredient = screen.queryByText('Ingredient');
      const searchName = screen.queryByText('Name');
      const searchFirstLetter = screen.queryByText('First letter');
      const searchExec = screen.queryByText('Search');

      expect(searchBar).not.toBeInTheDocument();
      expect(searchIngredient).toBeNull();
      expect(searchName).toBeNull();
      expect(searchFirstLetter).toBeNull();
      expect(searchExec).toBeNull();
    },
  );
});
