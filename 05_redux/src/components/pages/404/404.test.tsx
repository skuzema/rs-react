import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Page404 from './404';

describe('Page404', () => {
  it('should render the 404 page', () => {
    render(
      <MemoryRouter>
        <Page404 />
      </MemoryRouter>
    );
    const heading = screen.getByRole('heading', { level: 1, name: /404/i });
    const message = screen.getByText(/we are sorry, page not found!/i);
    const link = screen.getByRole('link', { name: /back to homepage/i });

    expect(heading).toBeInTheDocument();
    expect(message).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/');
  });
});
