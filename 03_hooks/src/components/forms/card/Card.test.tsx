import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';
import { TPCardForm } from '../../utils/CardProps';

describe('Card component', () => {
  const testData: TPCardForm = {
    author: 'Test Author',
    title: 'Test Title',
    post: 'Test Description',
    post_date: '2016-05-25',
    select: '0',
    check: true,
    gender: 'Male',
    image: 'https://example.com/image.png',
    id: 0,
    img_file: '',
  };

  it('renders card data correctly', () => {
    const { getByAltText, getByText } = render(<Card data={testData} />);

    expect(getByText(testData.title)).toBeInTheDocument();
    expect(getByText(testData.post)).toBeInTheDocument();
    expect(getByAltText(testData.title)).toHaveAttribute('src', testData.image);
  });
});
