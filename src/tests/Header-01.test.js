import React from 'react';
import { Provider } from 'react-redux';
import { screen } from '@testing-library/react';
import store from '../Redux/store';
import renderWithRouter from './renderWithRouter';
import App from '../App';
import Foods from '../pages/Foods';
import Drinks from '../pages/Drinks';
import DetailsRecepiesFoods from '../pages/DetailsRecepiesFoods';
import DetailsRecepiesDrinks from '../pages/DetailsRecepiesDrinks';
import Explore from '../pages/Explore';
import ExploreFoods from '../pages/ExploreFoods';
import ExploreDrinks from '../pages/ExploreDrinks';
import ExploreFoodIngredients from '../pages/ExplodreFoodIngredients';
import ProgressDrink from '../pages/ProgressDrinks';
import ProgressFood from '../pages/ProgressFood';

describe('Teste componente Header nas telas do aplicativo', () => {
  const PROFILE_TOP_BTN = 'profile-top-btn';
  const PAGE_TITLE = 'page-title';
  const SEARCH_TOP_BTN = 'search-top-btn';

  function auxiliar() {
    const headerTitle = screen.queryByTestId(PAGE_TITLE);
    const headerProfileTopBtn = screen.queryByTestId(PROFILE_TOP_BTN);
    const headerSearchTopBtn = screen.queryByTestId(SEARCH_TOP_BTN);

    return {
      headerTitle,
      headerProfileTopBtn,
      headerSearchTopBtn,
    };
  }

  test('Não tem header na tela de login', () => {
    renderWithRouter(<App />);
    const {
      headerTitle,
      headerProfileTopBtn,
      headerSearchTopBtn,
    } = auxiliar();

    expect(headerTitle).not.toBeInTheDocument();
    expect(headerProfileTopBtn).not.toBeInTheDocument();
    expect(headerSearchTopBtn).not.toBeInTheDocument();
  });

  test('Não tem header na tela de detalhes de uma receita de comida', () => {
    renderWithRouter(
      <Provider store={ store }>
        <DetailsRecepiesFoods />
      </Provider>,
      '/foods/:id',
    );
    const {
      headerTitle,
      headerProfileTopBtn,
      headerSearchTopBtn,
    } = auxiliar();

    expect(headerTitle).not.toBeInTheDocument();
    expect(headerProfileTopBtn).not.toBeInTheDocument();
    expect(headerSearchTopBtn).not.toBeInTheDocument();
  });

  test('Não tem header na tela de detalhes de uma receita de bebida', () => {
    renderWithRouter(
      <Provider store={ store }>
        <DetailsRecepiesDrinks />
      </Provider>,
      '/drinks/:id',
    );

    const {
      headerTitle,
      headerProfileTopBtn,
      headerSearchTopBtn,
    } = auxiliar();

    expect(headerTitle).not.toBeInTheDocument();
    expect(headerProfileTopBtn).not.toBeInTheDocument();
    expect(headerSearchTopBtn).not.toBeInTheDocument();
  });

  test('O header tem os ícones corretos na tela principal de receitas de comidas', () => {
    renderWithRouter(
      <Provider store={ store }>
        <Foods />
      </Provider>,
      '/foods',
    );

    const {
      headerTitle,
      headerProfileTopBtn,
      headerSearchTopBtn,
    } = auxiliar();

    expect(headerTitle).toBeInTheDocument();
    expect(headerProfileTopBtn).toBeInTheDocument();
    expect(headerSearchTopBtn).toBeInTheDocument();
  });

  test('O header tem os ícones corretos na tela principal de receitas de bebidas', () => {
    renderWithRouter(
      <Provider store={ store }>
        <Drinks />
      </Provider>,
      '/drinks',
    );

    const {
      headerTitle,
      headerProfileTopBtn,
      headerSearchTopBtn,
    } = auxiliar();

    expect(headerTitle).toBeInTheDocument();
    expect(headerProfileTopBtn).toBeInTheDocument();
    expect(headerSearchTopBtn).toBeInTheDocument();
  });

  test('Não tem header na tela de de receita em progresso de comida', () => {
    renderWithRouter(
      <Provider store={ store }>
        <ProgressFood />
      </Provider>,
      '/foods/:id/in-progress',
    );

    const {
      headerTitle,
      headerProfileTopBtn,
      headerSearchTopBtn,
    } = auxiliar();

    expect(headerTitle).not.toBeInTheDocument();
    expect(headerProfileTopBtn).not.toBeInTheDocument();
    expect(headerSearchTopBtn).not.toBeInTheDocument();
  });

  test('Não tem header na tela de de receita em progresso de bebida', () => {
    renderWithRouter(
      <Provider store={ store }>
        <ProgressDrink />
      </Provider>,
      '/drinks/:id/in-progress',
    );

    const {
      headerTitle,
      headerProfileTopBtn,
      headerSearchTopBtn,
    } = auxiliar();

    expect(headerTitle).not.toBeInTheDocument();
    expect(headerProfileTopBtn).not.toBeInTheDocument();
    expect(headerSearchTopBtn).not.toBeInTheDocument();
  });

  test('O header tem os ícones corretos na tela de explorar', () => {
    renderWithRouter(
      <Provider store={ store }>
        <Explore />
      </Provider>,
      '/explore',
    );

    const headerProfileTopBtn = screen.queryByTestId(PROFILE_TOP_BTN);
    // const headerSearchTopBtn = screen.queryByTestId(SEARCH_TOP_BTN);

    expect(headerProfileTopBtn).toBeInTheDocument();
    // expect(headerSearchTopBtn).not.toBeInTheDocument();
  });

  test('O header tem os ícones corretos na tela de explorar comidas', () => {
    renderWithRouter(
      <Provider store={ store }>
        <ExploreFoods />
      </Provider>,
      '/explore/foods',
    );

    const {
      headerTitle,
      headerProfileTopBtn,
    } = auxiliar();

    expect(headerTitle).toBeInTheDocument();
    expect(headerProfileTopBtn).toBeInTheDocument();
    // expect(headerSearchTopBtn).not.toBeInTheDocument();
  });

  test('O header tem os ícones corretos na tela de explorar bebidas', () => {
    renderWithRouter(
      <Provider store={ store }>
        <ExploreDrinks />
      </Provider>,
      '/explore/drinks',
    );

    const {
      headerTitle,
      headerProfileTopBtn,
    } = auxiliar();

    expect(headerTitle).toBeInTheDocument();
    expect(headerProfileTopBtn).toBeInTheDocument();
    // expect(headerSearchTopBtn).not.toBeInTheDocument();
  });

  test(
    'O header tem os ícones corretos na tela de explorar comidas por ingrediente',
    () => {
      renderWithRouter(
        <Provider store={ store }>
          <ExploreFoodIngredients />
        </Provider>,
        '/explore/foods/ingredients',
      );

      const {
        headerTitle,
        headerProfileTopBtn,
      } = auxiliar();

      expect(headerTitle).toBeInTheDocument();
      expect(headerProfileTopBtn).toBeInTheDocument();
      // expect(headerSearchTopBtn).not.toBeInTheDocument();
    },
  );
});
