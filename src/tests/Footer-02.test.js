import React from 'react';
import { screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import store from '../Redux/store';
import renderWithRouter from './renderWithRouter';
import ExploreNationality from '../pages/ExploreNationality';
import Profile from '../pages/Profile';
import DoneRecepies from '../pages/DoneRecepies';
import FavoritesRecepies from '../pages/FavoritesRecepies';
import Foods from '../pages/Foods';
import Drinks from '../pages/Drinks';

const FOOTER = 'footer';
const DRINKS_BOTTOM_BTN = 'drinks-bottom-btn';
const EXPLORE_BOTTOM_BTN = 'explore-bottom-btn';
const FOOD_BOTTOM_BTN = 'food-bottom-btn';

function renderizaTela() {
  const footer = screen.queryByTestId(FOOTER);
  const drinksBottomBtn = screen.queryByTestId(DRINKS_BOTTOM_BTN);
  const exploreBottomBtn = screen.queryByTestId(EXPLORE_BOTTOM_BTN);
  const foodBottomBtn = screen.queryByTestId(FOOD_BOTTOM_BTN);

  return {
    footer,
    drinksBottomBtn,
    exploreBottomBtn,
    foodBottomBtn,
  };
}

describe('Parte 02 - Testa a implementação e renderização do componente footer', () => {
  test(
    'O footer é exibido na tela de explorar bebidas por ingrediente.',
    () => {
      renderWithRouter(
        <Provider store={ store }>
          <ExploreNationality />
        </Provider>,
        '/explore/foods/nationalities',
      );

      const { footer } = renderizaTela();
      expect(footer).not.toBeNull();
    },
  );

  test(
    'O footer é exibido na tela de perfil.',
    () => {
      renderWithRouter(
        <Provider store={ store }>
          <Profile />
        </Provider>,
        '/profile',
      );

      const { footer } = renderizaTela();
      expect(footer).not.toBeNull();
    },
  );

  test(
    'O footer não é exibido na tela de receitas feitas.',
    () => {
      renderWithRouter(
        <Provider store={ store }>
          <DoneRecepies />
        </Provider>,
        '/done-recipes',
      );

      const { footer } = renderizaTela();

      expect(footer).toBeNull();
    },
  );

  test(
    'O footer não é exibido na tela de receitas favoritas.',
    () => {
      renderWithRouter(
        <Provider store={ store }>
          <FavoritesRecepies />
        </Provider>,
        '/favorite-recipes',
      );

      const { footer } = renderizaTela();

      expect(footer).toBeNull();
    },
  );
});

describe('O redirecionamento é feito corretamente ao clicar nos ícones do footer', () => {
  test(
    'Clicar no ícone de bebidas redireciona o usuário para a página de bebidas',
    () => {
      const { history } = renderWithRouter(
        <Provider store={ store }>
          <Foods />
        </Provider>,
        '/foods',
      );

      const { drinksBottomBtn } = renderizaTela();
      userEvent.click(drinksBottomBtn);
      expect(history.location.pathname).toBe('/drinks');
    },
  );

  test(
    'Clicar no ícone explorar redireciona o usuário para a página de explorar',
    () => {
      const { history } = renderWithRouter(
        <Provider store={ store }>
          <Foods />
        </Provider>,
        '/foods',
      );

      const { exploreBottomBtn } = renderizaTela();
      userEvent.click(exploreBottomBtn);
      expect(history.location.pathname).toBe('/explore');
    },
  );

  test(
    'Clicar no ícone de comidsd redireciona o usuário para a página de comidsd',
    () => {
      const { history } = renderWithRouter(
        <Provider store={ store }>
          <Drinks />
        </Provider>,
        '/foods',
      );

      const { foodBottomBtn } = renderizaTela();
      userEvent.click(foodBottomBtn);
      expect(history.location.pathname).toBe('/foods');
    },
  );
});
