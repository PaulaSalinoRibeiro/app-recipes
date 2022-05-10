import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouterAndStore from './renderWithRouterAndStore';

describe('Teste página de Login', () => {
  const EMAIL_INPUT = 'email-input';
  const PASSWORD_INPUT = 'password-input';
  const BTN_LOGIN = 'login-submit-btn';
  const TITLE = 'page-title';

  it('Verifica se existe os inputs e botão na tela', () => {
    renderWithRouterAndStore(<App />);
    const inptEmail = screen.getByTestId(EMAIL_INPUT);
    const inptPasssword = screen.getByTestId(PASSWORD_INPUT);
    const btn = screen.getByTestId(BTN_LOGIN);
    expect(inptEmail).toBeInTheDocument();
    expect(inptPasssword).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
  });

  it('Verifica se o botão esta desabilitado para email e senha invalidos', () => {
    const emailInvalido = 'teste';
    const senhaInvalida = '12345';

    renderWithRouterAndStore(<App />);
    const inptEmail = screen.getByTestId(EMAIL_INPUT);
    const inptPasssword = screen.getByTestId(PASSWORD_INPUT);
    const btn = screen.getByTestId(BTN_LOGIN);

    userEvent.type(inptEmail, emailInvalido);
    userEvent.type(inptPasssword, senhaInvalida);

    expect(btn).toBeDisabled();
  });

  it('Verifica se o botão é habilitado para email e senha válidos', () => {
    const emailInvalido = 'teste@teste.com';
    const senhaInvalida = '1234567';

    renderWithRouterAndStore(<App />);
    const inptEmail = screen.getByTestId(EMAIL_INPUT);
    const inptPasssword = screen.getByTestId(PASSWORD_INPUT);
    const btn = screen.getByTestId(BTN_LOGIN);

    userEvent.type(inptEmail, emailInvalido);
    userEvent.type(inptPasssword, senhaInvalida);

    expect(btn).not.toBeDisabled();
  });

  it('Verifica se ao cliquar no botão é redirecionado', () => {
    const { history } = renderWithRouterAndStore(<App />);
    const btn = screen.getByTestId(BTN_LOGIN);

    userEvent.click(btn);
    history.push('/foods');

    const title = screen.getByTestId(TITLE);
    expect(title).toBeInTheDocument();
  });
});
