import React from 'react';
import { screen } from '@testing-library/react';
import { Provider } from 'react-redux';
// import userEvent from '@testing-library/user-event';
import store from '../Redux/store';
import renderWithRouter from './renderWithRouter';
import ExploreNationality from '../pages/ExploreNationality';

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
        'explore/foods/nationalities',
      );

      const { footer } = renderizaTela();
      expect(footer).not.toBeNull();
    },
  );
});
