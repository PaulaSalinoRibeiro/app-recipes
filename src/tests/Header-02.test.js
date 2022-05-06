import React from 'react';
import { Provider } from 'react-redux';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import store from '../Redux/store';
import renderWithRouter from './renderWithRouter';
import Foods from '../pages/Foods';
// import App from '../App';

describe('Teste os ícones e o funcionamento do header', () => {
  const PROFILE_TOP_BTN = 'profile-top-btn';
  // const PAGE_TITLE = 'page-title';
  const SEARCH_TOP_BTN = 'search-top-btn';

  // const headerTitle = screen.queryByTestId(PAGE_TITLE);
  const headerProfileTopBtn = screen.queryByTestId(PROFILE_TOP_BTN);
  const headerSearchTopBtn = screen.queryByTestId(SEARCH_TOP_BTN);

  test(
    'Redirecione a pessoa usuária para a tela de perfil ao clicar no botão de perfil',
    () => {
      const { history } = renderWithRouter(
        <Provider store={ store }>
          <Foods />
        </Provider>,
        '/foods',
      );

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

    userEvent.click(headerSearchTopBtn);

    const searchBar = await screen.findByTestId('search-input');

    expect(searchBar).toBeInTheDocument();
  });
});
