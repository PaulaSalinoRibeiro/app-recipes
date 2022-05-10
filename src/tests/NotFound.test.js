import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Página NotFound', () => {
  it('verificar se uma rota invávida redireciona para PageNotFound', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/tests');
    const NotFound = screen.getByText('Not Found');
    expect(NotFound).toBeInTheDocument();
  });
});
