import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './renderWithRouter';
import mockFoods from './Mock/foods';
import mockNationality from './Mock/natinality';

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
  it('Verifica elementos na tela', async () => {
    const { history } = renderWithRouter(<App />);
    history.push('/explore/foods/nationalities');
    const dropdown = screen.getByTestId(DROP_DONW);
    const options = await screen.findAllByTestId(/british-option/i);
    const card = await screen.findAllByTestId(/0-recipe-card/i);
    const img = await screen.findAllByTestId(/0-card-img/i);
    const title = await screen.findAllByTestId(/0-card-name/i);

    expect(dropdown).toBeInTheDocument();
    expect(options).toHaveLength(1);
    expect(card).toHaveLength(1);
    expect(img).toHaveLength(1);
    expect(title).toHaveLength(1);
  });
});
