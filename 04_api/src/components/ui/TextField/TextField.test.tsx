import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import TextField from './TextField';

describe('TextField', () => {
  const label = 'Test Label';
  const name = 'test';

  it('renders with default type "text" when no type prop is passed', () => {
    const ref = { current: null };
    render(<TextField label={label} name={name} reference={ref} accept={''} error={''} />);
    expect(screen.getByTestId(name)).toHaveAttribute('type', 'text');
  });

  it('renders with type "password" when type prop is passed', () => {
    const ref = { current: null };
    render(
      <TextField label={label} name={name} reference={ref} type="password" accept={''} error={''} />
    );
    expect(screen.getByTestId(name)).toHaveAttribute('type', 'password');
  });

  it('shows password when "show password" checkbox is checked', () => {
    const ref = { current: null };
    render(
      <TextField label={label} name={name} reference={ref} type="password" accept={''} error={''} />
    );
    const checkbox = screen.getByLabelText('show password');
    const input = screen.getByTestId(name);

    // Initially, the password should be hidden
    expect(input).toHaveAttribute('type', 'password');

    // Clicking the checkbox again should hide the password
    userEvent.click(checkbox);
    expect(input).toHaveAttribute('type', 'password');
  });
});
