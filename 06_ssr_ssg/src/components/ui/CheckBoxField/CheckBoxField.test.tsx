import React from 'react';
import { render, screen } from '@testing-library/react';
import CheckBoxField from './CheckBoxField';

describe('CheckBoxField', () => {
  it('displays label text', () => {
    const label = 'Agree to terms and conditions';
    const error = { type: 'required', message: 'This field is required' };
    render(<CheckBoxField label={label} name="agree" error={error} />);
    expect(screen.getByText(label)).toBeInTheDocument();
  });

  it('sets input name and data-testid to passed name prop', () => {
    const name = 'agree';
    const error = { type: 'required', message: 'This field is required' };
    render(<CheckBoxField label="" name={name} error={error} />);
    expect(screen.getByTestId(name)).toBeInTheDocument();
  });
});
