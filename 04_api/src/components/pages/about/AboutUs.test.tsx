import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AboutUsPage from './AboutUs';

describe('AboutUsPage', () => {
  it('renders the PageHeader component with the correct page_name prop', () => {
    const { getByText } = render(
      <MemoryRouter>
        <AboutUsPage />
      </MemoryRouter>
    );
    expect(getByText('About Us')).toBeInTheDocument();
  });

  it('renders three boxes with images and titles', () => {
    const { getAllByAltText, getByText } = render(
      <MemoryRouter>
        <AboutUsPage />
      </MemoryRouter>
    );
    expect(getAllByAltText('')).toHaveLength(1);
    expect(getByText('William')).toBeInTheDocument();
  });

  it('renders the correct images', () => {
    const { getAllByAltText } = render(
      <MemoryRouter>
        <AboutUsPage />
      </MemoryRouter>
    );
    const images = getAllByAltText('');
    expect(images[0]).toHaveAttribute('src', 'https://i.imgur.com/Ur43esv.jpg');
  });
});
