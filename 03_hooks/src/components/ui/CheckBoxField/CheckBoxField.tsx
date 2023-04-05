import React, { useState } from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';

import { TPCardForm } from '../../utils/CardProps';
import './CheckBoxField.css';

type TProps = {
  label: string;
  type?: string;
  name: string;
  register: ReturnType<UseFormRegister<TPCardForm>>;
  error: FieldError | undefined;
};

const CheckBoxField = (props: TProps) => {
  const [isChecked] = useState(true);
  const getInputClasses = () => {
    return 'form-check-input' + (props.error ? ' is-invalid' : '');
  };
  return (
    <div className="form-check mb-4">
      <input
        className={getInputClasses()}
        type="checkbox"
        data-id={props.name}
        data-testid={props.name}
        defaultChecked={isChecked}
        {...props.register}
      />
      <label className="form-check-label" data-htmlfor={props.name}>
        {props.label}
      </label>
      {props.error && <div className="errmsg">{props.error.message}</div>}
    </div>
  );
};

export default CheckBoxField;
