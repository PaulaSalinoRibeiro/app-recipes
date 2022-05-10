import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouterAndStore from './renderWithRouterAndStore';

describe('Página NotFound', () => {
  it('verificar se uma rota invávida redireciona para PageNotFound', () => {
    const { history } = renderWithRouterAndStore(<App />);
    history.push('/tests');
    const NotFound = screen.getByText(/not found/i);
    expect(NotFound).toBeInTheDocument();
  });
});
