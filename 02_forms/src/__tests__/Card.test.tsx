import React from 'react';
import { render } from '@testing-library/react';
import Card from '../components/ui/card/Card';

describe('Card component', () => {
  const testData = {
    title: 'Test Title',
    post: 'Test Description',
    image: 'https://example.com/image.png',
    post_date: '2016-05-25',
  };

  it('renders card data correctly', () => {
    const { getByAltText, getByText } = render(<Card data={testData} />);

    expect(getByText(testData.title)).toBeInTheDocument();
    expect(getByText(testData.post)).toBeInTheDocument();
    expect(getByAltText(testData.title)).toHaveAttribute('src', testData.image);
    // expect(getByText(`${testData.post_date} Minutes Ago`)).toBeInTheDocument();
  });
});
