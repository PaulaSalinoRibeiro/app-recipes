import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
// import Login from '../pages/Login';
import App from '../App';
// import Foods from '../pages/Foods';

describe('Teste componente Header', () => {
  const PROFILE_TOP_BTN = 'profile-top-btn';
  const PAGE_TITLE = 'page-title';
  const SEARCH_TOP_BTN = 'search-top-btn';

  test('Não tem header na tela de login', () => {
    renderWithRouter(<App />);

    const headerTitle = screen.getByTestId(PAGE_TITLE);
    const headerProfileTopBtn = screen.getByTestId(PROFILE_TOP_BTN);
    const headerSearchTopBtn = screen.getByTestId(SEARCH_TOP_BTN);

    expect(headerTitle).not.toBeInTheDocument();
    expect(headerProfileTopBtn).not.toBeInTheDocument();
    expect(headerSearchTopBtn).not.toBeInTheDocument();
  });

  // test('O header tem os ícones corretos na tela principal de receitas de comidas', () => {
  //   const { history } = renderWithRouter(<Foods />);
  //   history.push('/foods');

  //   const headerTitle = screen.getByTestId(PAGE_TITLE);
  //   const headerProfileTopBtn = screen.getByTestId(PROFILE_TOP_BTN);
  //   const headerSearchTopBtn = screen.getByTestId(SEARCH_TOP_BTN);

  //   expect(headerTitle).toBeInTheDocument();
  //   expect(headerProfileTopBtn).toBeInTheDocument();
  //   expect(headerSearchTopBtn).toBeInTheDocument();
  // });
});
