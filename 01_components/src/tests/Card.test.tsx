import React from 'react';
import { render } from '@testing-library/react';
import Card from '../components/card/Card';

describe('Card component', () => {
  const testData = {
    title: 'Test Title',
    description: 'Test Description',
    image: 'https://example.com/image.png',
    time_ago: 10,
    comments: 5,
  };

  it('renders card data correctly', () => {
    const { getByAltText, getByText } = render(<Card data={testData} />);

    expect(getByText(testData.title)).toBeInTheDocument();
    expect(getByText(testData.description)).toBeInTheDocument();
    expect(getByAltText(testData.title)).toHaveAttribute('src', testData.image);
    expect(getByText(`${testData.time_ago} Minutes Ago`)).toBeInTheDocument();
    expect(getByText(`${testData.comments} Comments`)).toBeInTheDocument();
  });
});
