import React from 'react';
import { render } from '@testing-library/react';
import CardList from '../components/ui/cardList/CardList';

describe('CardList component', () => {
  const testData = [
    {
      title: 'Test Title 1',
      post: 'Test Description 1',
      image: 'https://example.com/image1.png',
      post_date: '2016-05-25',
    },
    {
      title: 'Test Title 2',
      post: 'Test Description 2',
      image: 'https://example.com/image2.png',
      post_date: '2016-05-25',
    },
  ];

  it('renders card data correctly', () => {
    const { getByText, getByAltText } = render(<CardList cardData={testData} />);

    testData.forEach((data) => {
      expect(getByText(data.title)).toBeInTheDocument();
      expect(getByText(data.post)).toBeInTheDocument();
      expect(getByAltText(data.title)).toHaveAttribute('src', data.image);
      // expect(getByText(`${data.post_date} Date Ago`)).toBeInTheDocument();
    });
  });
});
