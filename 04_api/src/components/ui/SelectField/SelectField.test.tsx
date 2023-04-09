import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SelectField from './SelectField';
import { useForm } from 'react-hook-form';
import { TPCardForm } from '../../utils/interfaces';

describe('SelectField', () => {
  const options = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
  ];
  const label = 'Select an option';
  const name = 'selectField';
  const defaultOption = 'Please select an option';
  const disabledOption = true;
  const error = undefined;

  const Wrapper = () => {
    const { register } = useForm<TPCardForm>();
    return (
      <SelectField
        label={label}
        name={name}
        defaultOption={defaultOption}
        options={options}
        disabledOption={disabledOption}
        register={register}
        error={error}
      />
    );
  };

  it('should render SelectField component', () => {
    render(<Wrapper />);
    expect(screen.getByTestId('selectField')).toBeInTheDocument();
  });

  it('should render default option', () => {
    render(<Wrapper />);
    expect(screen.getByText(defaultOption)).toBeInTheDocument();
  });

  it('should render all options', () => {
    render(<Wrapper />);
    options.forEach((option) => {
      expect(screen.getByText(option.label)).toBeInTheDocument();
    });
  });

  it('should select an option', () => {
    render(<Wrapper />);
    const option = screen.getByText(options[0].label);
    userEvent.selectOptions(screen.getByTestId('selectField'), option);
    expect(option.selected).toBeTruthy();
  });

  it('should not select disabled option', () => {
    render(<Wrapper />);
    const disabledOption = screen.getByText(defaultOption);
    expect(disabledOption.disabled).toBeTruthy();
  });
});
