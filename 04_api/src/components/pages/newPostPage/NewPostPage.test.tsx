import React from 'react';
import { render } from '@testing-library/react';
import NewPostPage from './NewPostPage';
import { MemoryRouter } from 'react-router-dom'; // import MemoryRouter

describe('NewPostPage', () => {
  it('renders the NewPostPage component with the correct page_name prop', () => {
    const { getByText } = render(
      <MemoryRouter>
        <NewPostPage />
      </MemoryRouter>
    );
    expect(getByText('New Post')).toBeInTheDocument();
  });
});
