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
});
