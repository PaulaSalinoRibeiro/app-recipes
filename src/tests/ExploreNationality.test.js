import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouterAndStore from './renderWithRouterAndStore';
import mockFoods from './Mocks/foods';
import mockNationality from './Mocks/natinality';

beforeEach(() => {
  global.fetch = jest.fn().mockImplementation((url) => {
    if (url === 'https://www.themealdb.com/api/json/v1/1/search.php?s=') {
      return Promise.resolve({
        json: jest.fn().mockResolvedValue(mockFoods),
      });
    }

    if (url === 'https://www.themealdb.com/api/json/v1/1/list.php?a=list') {
      return Promise.resolve({
        json: jest.fn().mockResolvedValue(mockNationality),
      });
    }
  });
});

describe('Teste ExploreNationality page', () => {
  const DROP_DONW = 'explore-by-nationality-dropdown';
  const MAX_LENGTH = 28;
  it('Verifica elementos na tela', async () => {
    const { history } = renderWithRouterAndStore(<App />);
    history.push('/explore/foods/nationalities');
    const dropdown = await screen.findByTestId(DROP_DONW);
    const option = await screen.findAllByTestId(/british-option/i);
    const card = await screen.findAllByTestId(/0-recipe-card/i);
    const img = await screen.findAllByTestId(/0-card-img/i);
    const title = await screen.findAllByTestId(/0-card-name/i);
    const options = await screen.findAllByTestId(/-option/);
    userEvent.click(dropdown);
    expect(options).toHaveLength(MAX_LENGTH);

    expect(dropdown).toBeInTheDocument();
    expect(option).toHaveLength(1);
    expect(card).toHaveLength(1);
    expect(img).toHaveLength(1);
    expect(title).toHaveLength(1);
  });
});
