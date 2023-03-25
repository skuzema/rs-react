import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // import MemoryRouter
import MainPage from '../components/pages/mainPage/MainPage';

describe('MainPage', () => {
  it('should render PageHeader component with correct props', () => {
    render(
      <MemoryRouter>
        {' '}
        {/* wrap MainPage in MemoryRouter */}
        <MainPage />
      </MemoryRouter>
    );
    const pageHeader = screen.getByText('Main Page');
    expect(pageHeader).toBeInTheDocument();
  });
});
