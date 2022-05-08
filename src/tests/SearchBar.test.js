import React from 'react';
import { Provider } from 'react-redux';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import store from '../Redux/store';
import renderWithRouter from './renderWithRouter';
import Foods from '../pages/Foods';
import Drinks from '../pages/Drinks';

describe('Testa os elementos e o funcionamento do SearchBar', () => {
  const SEARCH_TOP_BTN = 'search-top-btn';
  const PROFILE_TOP_BTN = 'profile-top-btn';
  const PAGE_TITLE = 'page-title';
  const SEARCH_INPUT = 'search-input';
  const SEARCH_INGREDIENT = 'ingredient-search-radio';
  const SEARCH_NAME = 'name-search-radio';
  const SEARCH_FIRST_LETTER = 'first-letter-search-radio';
  const SEARCH_EXEC = 'exec-search-btn';
  const PLACEHOLDER_SEARCH_INGREDIENT = 'search a ingredient';
  const TEXT_SEARCH_FIRST_LETTER = 'First letter';
  const TEXT_BUTTON_SEARCH = 'Search';

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

  test('Testa implementação dos elementos na barra de busca', () => {
    renderWithRouter(
      <Provider store={ store }>
        <Foods />
      </Provider>,
      '/foods',
    );

    const { headerSearchTopBtn } = auxiliar();
    userEvent.click(headerSearchTopBtn);

    const searchIngredient = screen.queryAllByTestId(SEARCH_INGREDIENT);
    const searchName = screen.queryAllByTestId(SEARCH_NAME);
    const searchFirstLetter = screen.queryAllByTestId(SEARCH_FIRST_LETTER);
    const searchExec = screen.queryAllByTestId(SEARCH_EXEC);

    expect(searchIngredient).not.toBeNull();
    expect(searchName).not.toBeNull();
    expect(searchFirstLetter).not.toBeNull();
    expect(searchExec).not.toBeNull();
  });

  test(
    'Se o radio selecionado for Name, a busca na API é feita corretamente pelo nome',
    async () => {
      renderWithRouter(
        <Provider store={ store }>
          <Foods />
        </Provider>,
        '/foods',
      );

      const { headerSearchTopBtn } = auxiliar();
      userEvent.click(headerSearchTopBtn);
      const searchName = screen.queryByText('Name');
      const searchInput = screen.queryByPlaceholderText(PLACEHOLDER_SEARCH_INGREDIENT);
      const searchExec = screen.queryByText(TEXT_BUTTON_SEARCH);

      userEvent.type(searchInput, 'soup');
      userEvent.click(searchName);
      userEvent.click(searchExec);

      const soupsRecepies = screen.queryByText(/soup/i);
      expect(soupsRecepies).not.toBeUndefined();
    },
  );

  test(
    'Ao selecionar o radio First letter, a busca é feita pela primeira letra',
    async () => {
      renderWithRouter(
        <Provider store={ store }>
          <Foods />
        </Provider>,
        '/foods',
      );

      const { headerSearchTopBtn } = auxiliar();
      userEvent.click(headerSearchTopBtn);
      const searchFirstLetter = screen.queryByText(TEXT_SEARCH_FIRST_LETTER);
      const searchInput = screen.queryByPlaceholderText(PLACEHOLDER_SEARCH_INGREDIENT);
      const searchExec = screen.queryByText(TEXT_BUTTON_SEARCH);

      userEvent.type(searchInput, 'a');
      userEvent.click(searchFirstLetter);
      userEvent.click(searchExec);
      const aRecepies = screen.queryByText(/apple/i);
      expect(aRecepies).not.toBeUndefined();
    },
  );

  // test(
  // 'Selecionar o First letter e buscar com mais de uma letra, deve exibir um alert',
  // async () => {
  // renderWithRouter(
  // <Provider store={ store }>
  // <Foods />
  // </Provider>,
  // '/foods',
  // );
//
  // const { headerSearchTopBtn } = auxiliar();
  // userEvent.click(headerSearchTopBtn);
//
  // const searchFirstLetter = screen.queryByText(TEXT_SEARCH_FIRST_LETTER);
  // const searchInput = screen.queryByPlaceholderText(PLACEHOLDER_SEARCH_INGREDIENT);
  // const searchExec = screen.queryByText(TEXT_BUTTON_SEARCH);
//
  // userEvent.type(searchInput, 'abcd');
  // userEvent.click(searchFirstLetter);
  // userEvent.click(searchExec);
//
  // global.alert = jest.fn();
  // expect(global.alert).toHaveBeenCalled();
//
  // expect(global.alert).toBeInTheDocument();
  // expect(global.alert).toHaveBeenCalledTimes(1);
  // },
  // );
});

describe(
  'Busque comidas caso esteja na página de comidas e bebidas caso esteja na de bebidas',
  () => {
    const SEARCH_TOP_BTN = 'search-top-btn';
    // const PROFILE_TOP_BTN = 'profile-top-btn';
    const PAGE_TITLE = 'page-title';
    const SEARCH_INPUT = 'search-input';
    const SEARCH_INGREDIENT = 'ingredient-search-radio';
    const SEARCH_NAME = 'name-search-radio';
    const SEARCH_FIRST_LETTER = 'first-letter-search-radio';
    const SEARCH_EXEC = 'exec-search-btn';
    const PLACEHOLDER_SEARCH_INGREDIENT = 'search a ingredient';
    // const TEXT_SEARCH_FIRST_LETTER = 'First letter';
    const TEXT_BUTTON_SEARCH = 'Search';
    const TEXT_BUTTON_INGREDIENTS = 'Ingredient';

    function auxiliar() {
      const headerTitle = screen.queryByTestId(PAGE_TITLE);
      // const headerProfileTopBtn = screen.queryByTestId(PROFILE_TOP_BTN);
      const headerSearchTopBtn = screen.queryByTestId(SEARCH_TOP_BTN);
      const searchInput = screen.queryByTestId(SEARCH_INPUT);
      const searchIngredient = screen.queryByTestId(SEARCH_INGREDIENT);
      const searchName = screen.queryByTestId(SEARCH_NAME);
      const searchFirstLetter = screen.queryByTestId(SEARCH_FIRST_LETTER);
      const searchExec = screen.queryByTestId(SEARCH_EXEC);

      return {
        headerTitle,
        // headerProfileTopBtn,
        headerSearchTopBtn,
        searchInput,
        searchIngredient,
        searchName,
        searchFirstLetter,
        searchExec,
      };
    }

    test(
      'Na tela de bebidas, se selecionado Ingredient, a busca é feita corretamente.',
      () => {
        renderWithRouter(
          <Provider store={ store }>
            <Drinks />
          </Provider>,
          '/foods',
        );
        const { headerSearchTopBtn } = auxiliar();
        userEvent.click(headerSearchTopBtn);

        const searchButtonIngredient = screen.queryByText(TEXT_BUTTON_INGREDIENTS);
        const searchInput = screen.queryByPlaceholderText(PLACEHOLDER_SEARCH_INGREDIENT);
        const searchExec = screen.queryByText(TEXT_BUTTON_SEARCH);

        userEvent.click(searchButtonIngredient);
        userEvent.type(searchInput, 'lemon');
        userEvent.click(searchExec);

        const recepies = screen.queryByText(/A True Amaretto Sour/i);

        expect(recepies).not.toBeUndefined();
      },
    );
  },
);
