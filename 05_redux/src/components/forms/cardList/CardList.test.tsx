import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { useGetArticlesQuery } from '../../../services/articlesSevice';
import CardList from './CardList';
import { vi } from 'vitest';

vi.mock('../../../services/articlesSevice');

describe('CardList', () => {
  const mockStore = configureStore([]);
  const articles = [
    {
      title: 'Test Article 1',
      url: 'https://example.com/article1',
      urlToImage: 'https://example.com/article1.jpg',
      description: 'Test article 1 description',
      publishedAt: '2022-03-21T00:00:00Z',
      source: { name: 'Test Source' },
    },
    {
      title: 'Test Article 2',
      url: 'https://example.com/article2',
      urlToImage: 'https://example.com/article2.jpg',
      description: 'Test article 2 description',
      publishedAt: '2022-03-20T00:00:00Z',
      source: { name: 'Test Source' },
    },
  ];
  const queryParam = { query: 'test', page: 1, pageSize: 10 };

  test('renders a loading spinner while fetching articles', () => {
    useGetArticlesQuery.mockReturnValueOnce({
      data: null,
      isLoading: true,
      error: null,
    });

    const store = mockStore({
      queryParam,
    });

    render(
      <Provider store={store}>
        <CardList />
      </Provider>
    );

    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  test('renders an error message if an error occurs', async () => {
    const error = new Error('Test error message');
    useGetArticlesQuery.mockReturnValueOnce({
      data: null,
      isLoading: false,
      error,
    });

    const store = mockStore({
      queryParam,
    });

    render(
      <Provider store={store}>
        <CardList />
      </Provider>
    );

    await waitFor(() => {
      expect(screen.getByText(/error/i)).toBeInTheDocument();
    });
  });

  test('renders the articles if they exist', async () => {
    useGetArticlesQuery.mockReturnValueOnce({
      data: { articles },
      isLoading: false,
      error: null,
    });

    const store = mockStore({
      queryParam,
    });

    render(
      <Provider store={store}>
        <CardList />
      </Provider>
    );

    await waitFor(() => {
      expect(screen.queryByRole('status')).not.toBeInTheDocument();
      expect(screen.queryByText(/error/i)).not.toBeInTheDocument();
      expect(screen.getAllByRole('article')).toHaveLength(2);
    });
  });

  test('renders a "not found" message if there are no articles', async () => {
    useGetArticlesQuery.mockReturnValueOnce({
      data: { articles: [] },
      isLoading: false,
      error: null,
    });

    const store = mockStore({
      queryParam,
    });

    render(
      <Provider store={store}>
        <CardList />
      </Provider>
    );

    await waitFor(() => {
      expect(screen.queryByRole('status')).not.toBeInTheDocument();
      expect(screen.queryByText(/error/i)).not.toBeInTheDocument();
      expect(screen.getByText(/not found/i)).toBeInTheDocument();
    });
  });
});
