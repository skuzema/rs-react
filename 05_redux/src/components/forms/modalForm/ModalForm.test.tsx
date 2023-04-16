import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ModalForm from './ModalForm';
import { vi } from 'vitest';

const mockData = {
  data: {
    title: 'Test Article',
    description: 'Test Description',
    content: 'Test Content',
    url: 'https://test.com',
    urlToImage: 'https://test.com/test.jpg',
    author: 'Test Author',
    publishedAt: '2021-01-01T00:00:00Z',
    source: { name: 'Test Source' },
  },
};

describe('ModalForm', () => {
  it('should render the modal form with correct data', () => {
    const onClose = vi.fn();
    const { getByText, getByAltText } = render(
      <ModalForm showModal={true} data={mockData} onModalFormClose={onClose} />
    );

    expect(getByText(mockData.title)).toBeInTheDocument();
    expect(getByAltText(mockData.title)).toBeInTheDocument();
    expect(getByText(mockData.description)).toBeInTheDocument();
    expect(getByText(mockData.content)).toBeInTheDocument();
    expect(getByText('Open full article in new tab')).toBeInTheDocument();

    const closeButton = getByText('x');
    fireEvent.click(closeButton);
    expect(onClose).toHaveBeenCalled();
  });
});
