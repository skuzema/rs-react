import React, { createRef, RefObject } from 'react';
import { render } from '@testing-library/react';
import SelectField from './SelectField';

type TProps = {
  label: string;
  name: string;
  defaultOption: string;
  options: { label: string; value: string }[];
  error: string;
  reference: RefObject<HTMLSelectElement>;
  disabledOption: boolean;
};

describe('SelectField', () => {
  const defaultProps: TProps = {
    label: 'Select an option',
    name: 'selectField',
    defaultOption: 'Choose an option',
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
      { label: 'Option 3', value: '3' },
    ],
    error: '',
    reference: createRef<HTMLSelectElement>(),
    disabledOption: true,
  };

  it('displays error message if error prop is passed', () => {
    const errorMessage = 'Please select an option';
    const { getByText } = render(<SelectField {...defaultProps} error={errorMessage} />);
    const errorElement = getByText(errorMessage);
    expect(errorElement).toBeInTheDocument();
  });

  it('sets the reference correctly', () => {
    const reference = createRef<HTMLSelectElement>();
    render(<SelectField {...defaultProps} reference={reference} />);
    expect(defaultProps.reference.current).toBeNull();
    expect(reference.current).not.toBeNull();
  });
});
