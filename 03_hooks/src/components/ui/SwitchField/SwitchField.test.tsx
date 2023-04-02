import React, { createRef, RefObject } from 'react';
import { render, screen } from '@testing-library/react';
import SwitchField from './SwitchField';

type TProps = {
  label: string;
  type?: string;
  name: string;
  reference: RefObject<HTMLInputElement>;
  error: string;
  options: string[];
};

describe('SwitchField', () => {
  let props: TProps;
  let checkboxRef: React.RefObject<HTMLInputElement>;

  beforeEach(() => {
    props = {
      label: 'My SwitchField',
      name: 'mySwitchField',
      reference: checkboxRef,
      error: '',
      options: ['On', 'Off'],
    };
    checkboxRef = createRef<HTMLInputElement>();
  });

  it('renders the label', () => {
    render(<SwitchField {...props} />);
    expect(screen.getByText('My SwitchField')).toBeInTheDocument();
  });

  it('renders the switch options', () => {
    render(<SwitchField {...props} />);
    expect(screen.getByText('On')).toBeInTheDocument();
    expect(screen.getByText('Off')).toBeInTheDocument();
  });

  it('renders the checkbox with correct name', () => {
    render(<SwitchField {...props} />);
    expect(screen.getByTestId('mySwitchField')).toHaveAttribute('name', 'mySwitchField');
  });

  it('renders an error message when provided', () => {
    props.error = 'Something went wrong';
    render(<SwitchField {...props} />);
    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
  });
});
