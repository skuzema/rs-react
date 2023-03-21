import React from 'react';
import { render } from '@testing-library/react';
import CardList from '../components/cardList/CardList';

describe('CardList component', () => {
  const testData = [
    {
      title: 'Test Title 1',
      description: 'Test Description 1',
      image: 'https://example.com/image1.png',
      time_ago: 10,
      comments: 5,
    },
    {
      title: 'Test Title 2',
      description: 'Test Description 2',
      image: 'https://example.com/image2.png',
      time_ago: 20,
      comments: 10,
    },
  ];

  it('renders card data correctly', () => {
    const { getByText, getByAltText } = render(<CardList cardData={testData} />);

    testData.forEach((data) => {
      expect(getByText(data.title)).toBeInTheDocument();
      expect(getByText(data.description)).toBeInTheDocument();
      expect(getByAltText(data.title)).toHaveAttribute('src', data.image);
      expect(getByText(`${data.time_ago} Minutes Ago`)).toBeInTheDocument();
      expect(getByText(`${data.comments} Comments`)).toBeInTheDocument();
    });
  });
});
