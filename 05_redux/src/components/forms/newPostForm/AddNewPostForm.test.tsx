import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';

import { store } from '../../../store/store';
import AddNewPostForm from './AddNewPostForm';

describe('AddNewPostForm', () => {
  it('shows an error message if the author field is empty', async () => {
    render(
      <Provider store={store}>
        <AddNewPostForm />
      </Provider>
    );

    fireEvent.click(screen.getByText('Add'));

    expect(await screen.findByText('The field "Author" should be filled!')).toBeInTheDocument();
  });
});
