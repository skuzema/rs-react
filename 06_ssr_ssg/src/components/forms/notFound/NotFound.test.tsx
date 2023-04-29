import React from 'react';
import { render } from '@testing-library/react';
import NotFound from './NotFound';

describe('NotFound', () => {
  it('should render a message indicating no articles were found', () => {
    const { getByRole } = render(<NotFound />);
    const message = getByRole('heading', { level: 2 });
    expect(message.textContent).toEqual('There are no articles matching your request.');
  });
});
