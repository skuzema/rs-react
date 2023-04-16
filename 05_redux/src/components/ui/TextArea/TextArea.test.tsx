import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useForm } from 'react-hook-form';
import TextArea from './TextArea';

describe('TextArea component', () => {
  it('should render with label and register function', () => {
    const { register } = useForm();
    render(
      <TextArea label="Description" name="description" register={register} rows={5} cols={50} />
    );
    expect(screen.getByLabelText('Description')).toBeInTheDocument();
    expect(screen.getByTestId('description')).toHaveAttribute('rows', '5');
    expect(screen.getByTestId('description')).toHaveAttribute('cols', '50');
  });

  it('should display error message when passed', async () => {
    const { register, formState } = useForm({ mode: 'onChange' });
    const errorMessage = 'Description is required';
    render(
      <TextArea
        label="Description"
        name="description"
        register={register({ required: errorMessage })}
        error={formState.errors.description}
        rows={5}
        cols={50}
      />
    );
    const textArea = screen.getByTestId('description');
    await userEvent.type(textArea, 'foo', { allAtOnce: true });
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });
});
