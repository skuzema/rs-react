import React from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';

import { TPCardForm } from '../../utils/CardProps';
import './SwitchField.scss';

type TProps = {
  label: string;
  type?: string;
  name: string;
  register: ReturnType<UseFormRegister<TPCardForm>>;
  error: FieldError | undefined;
  options: string[];
};

const SwitchField = (props: TProps) => {
  return (
    <div className="switcher">
      <span>{props.options[0]}</span>
      <input
        className="checkbox"
        type="checkbox"
        data-name={props.name}
        {...props.register}
        data-testid={props.name}
      />
      <span>{props.options[1]}</span>
      {props.label && (
        <label className="form-check-label" data-htmlfor={props.name}>
          {props.label}
        </label>
      )}
      {props.error && <div className="invalid-feedback">{props.error.message}</div>}
    </div>
  );
};

export default SwitchField;
