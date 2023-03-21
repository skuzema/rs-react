import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AboutUsPage from '../components/pages/about/AboutUs';

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
    expect(getAllByAltText('')).toHaveLength(3);
    expect(getByText('William')).toBeInTheDocument();
    expect(getByText('Krist')).toBeInTheDocument();
    expect(getByText('Nehal')).toBeInTheDocument();
  });

  it('renders the correct images', () => {
    const { getAllByAltText } = render(
      <MemoryRouter>
        <AboutUsPage />
      </MemoryRouter>
    );
    const images = getAllByAltText('');
    expect(images[0]).toHaveAttribute('src', 'https://i.imgur.com/Ur43esv.jpg');
    expect(images[1]).toHaveAttribute('src', 'https://i.imgur.com/8RKXAIV.jpg');
    expect(images[2]).toHaveAttribute('src', 'https://i.imgur.com/J6l19aF.jpg');
  });
});
