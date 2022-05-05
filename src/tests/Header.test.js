import React from 'react';
import { Provider } from 'react-redux';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import store from '../Redux/store';
import App from '../App';
import renderWithRouter from './renderWithRouter';
import Foods from '../pages/Foods';
import Drinks from '../pages/Drinks';
import DetailsRecepiesFoods from '../pages/DetailsRecepiesFoods';
import DetailsRecepiesDrinks from '../pages/DetailsRecepiesDrinks';
import Explore from '../pages/Explore';
import ExploreFoods from '../pages/ExploreFoods';
import ExploreDrinks from '../pages/ExploreDrinks';
import ExploreFoodIngredients from '../pages/ExplodreFoodIngredients';
import ExploreDrinkIngredients from '../pages/ExploreDrinkIngredients';
import ExploreNationality from '../pages/ExploreNationality';
import Profile from '../pages/Profile';
import FavoritesRecepies from '../pages/FavoritesRecepies';

describe('Teste componente Header na tela de login', () => {
  const PROFILE_TOP_BTN = 'profile-top-btn';
  const PAGE_TITLE = 'page-title';
  const SEARCH_TOP_BTN = 'search-top-btn';

  const headerTitle = screen.queryByTestId(PAGE_TITLE);
  const headerProfileTopBtn = screen.queryByTestId(PROFILE_TOP_BTN);
  const headerSearchTopBtn = screen.queryByTestId(SEARCH_TOP_BTN);

  test('Não tem header na tela de login', () => {
    renderWithRouter(<App />);

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

    expect(headerTitle).toBeInTheDocument();
    expect(headerProfileTopBtn).toBeInTheDocument();
    expect(headerSearchTopBtn).toBeInTheDocument();
  });

  test('O header tem os ícones corretos na tela principal de receitas de bebidas', () => {
    renderWithRouter(
      <Provider store={ store }>
        <Drinks />
      </Provider>,
      '/foods',
    );

    expect(headerTitle).toBeInTheDocument();
    expect(headerProfileTopBtn).toBeInTheDocument();
    expect(headerSearchTopBtn).toBeInTheDocument();
  });

  test('Não tem header na tela de detalhes de uma receita de comida', () => {
    renderWithRouter(
      <Provider store={ store }>
        <DetailsRecepiesFoods />
      </Provider>,
      '/foods',
    );

    expect(headerTitle).not.toBeInTheDocument();
    expect(headerProfileTopBtn).not.toBeInTheDocument();
    expect(headerSearchTopBtn).not.toBeInTheDocument();
  });

  test('Não tem header na tela de detalhes de uma receita de bebida', () => {
    renderWithRouter(
      <Provider store={ store }>
        <DetailsRecepiesDrinks />
      </Provider>,
      '/foods',
    );

    expect(headerTitle).not.toBeInTheDocument();
    expect(headerProfileTopBtn).not.toBeInTheDocument();
    expect(headerSearchTopBtn).not.toBeInTheDocument();
  });

  // test('Não tem header na tela de de receita em progresso de comida', () => {
  //   renderWithRouter(
  //     <Provider store={ store }>
  //       {/* <DetailsRecepiesDrinks /> */}
  //     </Provider>,
  //     '/foods',
  //   );

  //   expect(headerTitle).not.toBeInTheDocument();
  //   expect(headerProfileTopBtn).not.toBeInTheDocument();
  //   expect(headerSearchTopBtn).not.toBeInTheDocument();
  // });

  // test('Não tem header na tela de de receita em progresso de bebida', () => {
  //   renderWithRouter(
  //     <Provider store={ store }>
  //       {/* <DetailsRecepiesDrinks /> */}
  //     </Provider>,
  //     '/foods',
  //   );

  //   expect(headerTitle).not.toBeInTheDocument();
  //   expect(headerProfileTopBtn).not.toBeInTheDocument();
  //   expect(headerSearchTopBtn).not.toBeInTheDocument();
  // });

  test('O header tem os ícones corretos na tela de explorar', () => {
    renderWithRouter(
      <Provider store={ store }>
        <Explore />
      </Provider>,
      '/foods',
    );

    expect(headerTitle).toBeInTheDocument();
    expect(headerProfileTopBtn).toBeInTheDocument();
    expect(headerSearchTopBtn).not.toBeInTheDocument();
  });

  test('O header tem os ícones corretos na tela de explorar comidas', () => {
    renderWithRouter(
      <Provider store={ store }>
        <ExploreFoods />
      </Provider>,
      '/foods',
    );

    expect(headerTitle).toBeInTheDocument();
    expect(headerProfileTopBtn).toBeInTheDocument();
    expect(headerSearchTopBtn).not.toBeInTheDocument();
  });

  test('O header tem os ícones corretos na tela de explorar bebidas', () => {
    renderWithRouter(
      <Provider store={ store }>
        <ExploreDrinks />
      </Provider>,
      '/foods',
    );

    expect(headerTitle).toBeInTheDocument();
    expect(headerProfileTopBtn).toBeInTheDocument();
    expect(headerSearchTopBtn).not.toBeInTheDocument();
  });

  test(
    'O header tem os ícones corretos na tela de explorar comidas por ingrediente',
    () => {
      renderWithRouter(
        <Provider store={ store }>
          <ExploreFoodIngredients />
        </Provider>,
        '/foods',
      );

      expect(headerTitle).toBeInTheDocument();
      expect(headerProfileTopBtn).toBeInTheDocument();
      expect(headerSearchTopBtn).not.toBeInTheDocument();
    },
  );

  test(
    'O header tem os ícones corretos na tela de explorar bebida por ingrediente',
    () => {
      renderWithRouter(
        <Provider store={ store }>
          <ExploreDrinkIngredients />
        </Provider>,
        '/foods',
      );

      expect(headerTitle).toBeInTheDocument();
      expect(headerProfileTopBtn).toBeInTheDocument();
      expect(headerSearchTopBtn).not.toBeInTheDocument();
    },
  );

  test(
    'O header tem os ícones corretos na tela de explorar comidas por nacionalidade',
    () => {
      renderWithRouter(
        <Provider store={ store }>
          <ExploreNationality />
        </Provider>,
        '/foods',
      );

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
        '/foods',
      );

      expect(headerTitle).toBeInTheDocument();
      expect(headerProfileTopBtn).toBeInTheDocument();
      expect(headerSearchTopBtn).not.toBeInTheDocument();
    },
  );

  test(
    'O header tem os ícones corretos na tela de receitas favoritas',
    () => {
      renderWithRouter(
        <Provider store={ store }>
          <FavoritesRecepies />
        </Provider>,
        '/foods',
      );

      expect(headerTitle).toBeInTheDocument();
      expect(headerProfileTopBtn).toBeInTheDocument();
      expect(headerSearchTopBtn).not.toBeInTheDocument();
    },
  );
});
