import React, { createRef, RefObject } from 'react';
import { render, screen } from '@testing-library/react';
import { UseFormRegisterReturn } from 'react-hook-form';
import SwitchField from './SwitchField';
import { vi } from 'vitest';

type TProps = {
  label: string;
  type?: string;
  name: string;
  reference: RefObject<HTMLInputElement>;
  error: string;
  options: string[];
  register: UseFormRegisterReturn;
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
      register: vi.fn(),
    };
    checkboxRef = createRef<HTMLInputElement>();
  });

  it('renders the label', () => {
    render(<SwitchField {...props} />);
    expect(screen.getByText('My SwitchField')).toBeInTheDocument();
  });
});
