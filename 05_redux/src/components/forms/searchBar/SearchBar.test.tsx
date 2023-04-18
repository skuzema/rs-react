import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import SearchBar from './SearchBar';

const mockStore = configureMockStore();

describe('SearchBar', () => {
  it('renders a search bar', () => {
    const store = mockStore({
      queryParam: {
        q: 'test',
      },
    });

    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );

    const searchInput = screen.getByPlaceholderText('Title');
    expect(searchInput).toBeInTheDocument();
    expect(searchInput.value).toBe('test');
  });
});
