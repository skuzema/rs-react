import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
  it('renders the home page', () => {
    render(<App />);
    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  it('renders the about page', () => {
    render(<App />);
    const aboutLink = screen.getByRole('link', { name: /about/i });
    userEvent.click(aboutLink);
    expect(screen.getByText('About')).toBeInTheDocument();
  });
});
