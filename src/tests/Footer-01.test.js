import React from 'react';
import { screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../Redux/store';
import renderWithRouter from './renderWithRouter';
import Foods from '../pages/Foods';
import App from '../App';
import Drinks from '../pages/Drinks';
import DetailsRecepiesFoods from '../pages/DetailsRecepiesFoods';
import DetailsRecepiesDrinks from '../pages/DetailsRecepiesDrinks';
import ProgressFood from '../pages/ProgressFood';
import ProgressDrink from '../pages/ProgressDrinks';
import Explore from '../pages/Explore';
import ExploreFoods from '../pages/ExploreFoods';
import ExploreDrinks from '../pages/ExploreDrinks';
import ExploreFoodIngredients from '../pages/ExplodreFoodIngredients';
import ExploreDrinkIngredients from '../pages/ExploreDrinkIngredients';

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

describe('Parte 01 - Testa a implementação e renderização do componente footer', () => {
  test(
    'O footer tem os ícones de bebida, de comida e de explorar.',
    () => {
      renderWithRouter(
        <Provider store={ store }>
          <Foods />
        </Provider>,
        '/foods',
      );

      const {
        footer,
        drinksBottomBtn,
        exploreBottomBtn,
        foodBottomBtn,
      } = renderizaTela();

      expect(footer).toBeInTheDocument();
      expect(drinksBottomBtn).toBeInTheDocument();
      expect(exploreBottomBtn).toBeInTheDocument();
      expect(foodBottomBtn).toBeInTheDocument();
    },
  );

  test(
    'O footer não é exibido na tela de login.',
    () => {
      renderWithRouter(
        <Provider store={ store }>
          <App />
        </Provider>,
        '/',
      );

      const { footer } = renderizaTela();

      expect(footer).toBeNull();
    },
  );

  test(
    'O footer é exibido na tela principal de receitas de comidas.',
    () => {
      renderWithRouter(
        <Provider store={ store }>
          <Foods />
        </Provider>,
        '/foods',
      );

      const { footer } = renderizaTela();
      expect(footer).not.toBeNull();
    },
  );

  test(
    'O footer é exibido na tela principal de receitas de bebidas.',
    () => {
      renderWithRouter(
        <Provider store={ store }>
          <Drinks />
        </Provider>,
        '/drinks',
      );

      const { footer } = renderizaTela();
      expect(footer).not.toBeNull();
    },
  );

  test(
    'O footer não é exibido na tela de detalhes de uma receita de comida.',
    () => {
      renderWithRouter(
        <Provider store={ store }>
          <DetailsRecepiesFoods />
        </Provider>,
        '/foods/:id',
      );

      const { footer } = renderizaTela();

      expect(footer).toBeNull();
    },
  );

  test(
    'O footer não é exibido na tela de detalhes de uma receita de bebida.',
    () => {
      renderWithRouter(
        <Provider store={ store }>
          <DetailsRecepiesDrinks />
        </Provider>,
        '/drinks/:id',
      );

      const { footer } = renderizaTela();

      expect(footer).toBeNull();
    },
  );

  test(
    'O footer não é exibido na tela de receita em progresso de comida.',
    () => {
      renderWithRouter(
        <Provider store={ store }>
          <ProgressFood />
        </Provider>,
        '/foods/:id/in-progress',
      );

      const { footer } = renderizaTela();

      expect(footer).toBeNull();
    },
  );

  test(
    'O footer não é exibido na tela de receita em progresso de bebida.',
    () => {
      renderWithRouter(
        <Provider store={ store }>
          <ProgressDrink />
        </Provider>,
        '/drinks/:id/in-progress',
      );

      const { footer } = renderizaTela();

      expect(footer).toBeNull();
    },
  );

  test(
    'O footer é exibido na tela de explorar.',
    () => {
      renderWithRouter(
        <Provider store={ store }>
          <Explore />
        </Provider>,
        '/explore',
      );

      const { footer } = renderizaTela();
      expect(footer).not.toBeNull();
    },
  );

  test(
    'O footer é exibido na tela de explorar comidas.',
    () => {
      renderWithRouter(
        <Provider store={ store }>
          <ExploreFoods />
        </Provider>,
        '/explore/foods',
      );

      const { footer } = renderizaTela();
      expect(footer).not.toBeNull();
    },
  );

  test(
    'O footer é exibido na tela de explorar bebidas.',
    () => {
      renderWithRouter(
        <Provider store={ store }>
          <ExploreDrinks />
        </Provider>,
        '/explore/drinks',
      );

      const { footer } = renderizaTela();
      expect(footer).not.toBeNull();
    },
  );

  test(
    'O footer é exibido na tela de explorar comidas por ingrediente.',
    () => {
      renderWithRouter(
        <Provider store={ store }>
          <ExploreFoodIngredients />
        </Provider>,
        '/explore/foods/ingredients',
      );

      const { footer } = renderizaTela();
      expect(footer).not.toBeNull();
    },
  );

  test(
    'O footer é exibido na tela de explorar bebidas por ingrediente.',
    () => {
      renderWithRouter(
        <Provider store={ store }>
          <ExploreDrinkIngredients />
        </Provider>,
        '/explore/foods/ingredients',
      );

      const { footer } = renderizaTela();
      expect(footer).not.toBeNull();
    },
  );
});
