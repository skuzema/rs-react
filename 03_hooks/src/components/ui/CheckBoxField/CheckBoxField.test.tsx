import React from 'react';
import { render, screen } from '@testing-library/react';
import CheckBoxField from './CheckBoxField';

describe('CheckBoxField', () => {
  it('displays label text', () => {
    const label = 'Agree to terms and conditions';
    const ref = { current: null };
    render(<CheckBoxField label={label} name="agree" reference={ref} error="" />);
    expect(screen.getByText(label)).toBeInTheDocument();
  });

  it('sets input name and data-testid to passed name prop', () => {
    const name = 'agree';
    const ref = { current: null };
    render(<CheckBoxField label="" name={name} reference={ref} error="" />);
    expect(screen.getByTestId(name)).toBeInTheDocument();
  });
});
