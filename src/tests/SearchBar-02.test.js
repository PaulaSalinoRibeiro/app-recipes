import React from 'react';
import { screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import store from '../Redux/store';
import renderWithRouter from './renderWithRouter';
import Drinks from '../pages/Drinks';

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

describe(
  '2 Busque bebidas na de bebidas',
  () => {
    test(
      'Ao selecionar o radio First letter, a busca é feita pela primeira letra',
      () => {
        renderWithRouter(
          <Provider store={ store }>
            <Drinks />
          </Provider>,
          '/foods',
        );
        const { headerSearchTopBtn } = auxiliar();
        userEvent.click(headerSearchTopBtn);

        const { searchFirstLetter } = auxiliar();
        userEvent.click(searchFirstLetter);

        const { searchInput } = auxiliar();
        userEvent.type(searchInput, 'a');

        const { searchExec } = auxiliar();
        userEvent.click(searchExec);

        const recepies = screen.queryByText(/a1/i);

        expect(recepies).not.toBeUndefined();
      },
    );

    test(
      'Selecionar o First letter e buscar com mais de uma letra, deve exibir um alert',
      async () => {
        const alertMock = jest.spyOn(window, 'alert').mockImplementation();

        renderWithRouter(
          <Provider store={ store }>
            <Drinks />
          </Provider>,
          '/drinks',
        );

        const { headerSearchTopBtn } = auxiliar();
        userEvent.click(headerSearchTopBtn);

        const { searchFirstLetter } = auxiliar();
        userEvent.click(searchFirstLetter);

        const { searchInput } = auxiliar();
        userEvent.type(searchInput, 'abcd');

        const { searchExec } = auxiliar();
        userEvent.click(searchExec);

        expect(alertMock).toHaveBeenCalled();
        expect(alertMock).toHaveBeenCalledTimes(1);

        const textAlert = /Your search must have only 1 (one) character/i;

        expect(screen.findByText(textAlert)).not.toBeUndefined();
      },
    );
  },
);

// describe('Mostre as receitas em cards caso mais de uma receita seja encontrada', () => {
//   test('Caso mais de uma comida seja encontrada, mostrar as 12 primeiras', () => {
//     renderWithRouter(
//       <Provider store={ store }>
//         <Foods />
//       </Provider>,
//       '/foods',
//     );
//     const { headerSearchTopBtn } = auxiliar();
//     userEvent.click(headerSearchTopBtn);

//     const { searchInput, searchName, searchExec } = auxiliar();

//     userEvent.type(searchInput, 'soup');
//     userEvent.click(searchName);
//     userEvent.click(searchExec);

//     const recepies = screen.findAllByText(/soup/i);
//     const cardsNumber = 12;
//     expect(recepies.length).toBe(cardsNumber);
//   });
// });
