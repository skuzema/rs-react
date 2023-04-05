import React from 'react';
import { render } from '@testing-library/react';
import CardList from './CardList';

describe('CardList component', () => {
  const data = [
    {
      id: 1,
      author: 'Test Author1',
      title: 'Test Title1',
      post: 'Test Description1',
      post_date: '2016-05-25',
      select: '0',
      check: true,
      gender: 'Male',
      image: 'https://example.com/image.png',
      img_file: '',
    },
    {
      id: 2,
      author: 'Test Author2',
      title: 'Test Title2',
      post: 'Test Description2',
      post_date: '2016-05-21',
      select: '0',
      check: false,
      gender: 'Female',
      image: 'https://example.com/image.png',
      img_file: '',
    },
  ];

  it('renders card data correctly', () => {
    const { getByText, getByAltText } = render(<CardList data={data} />);

    data.forEach((data) => {
      expect(getByText(data.title)).toBeInTheDocument();
      expect(getByText(data.post)).toBeInTheDocument();
      expect(getByAltText(data.title)).toHaveAttribute('src', data.image);
    });
  });
});
