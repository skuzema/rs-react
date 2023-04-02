import React, { useState, RefObject } from 'react';

import './CheckBoxField.css';

type TProps = {
  label: string;
  type?: string;
  name: string;
  reference: RefObject<HTMLInputElement>;
  error: string;
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
        ref={props.reference}
      />
      <label className="form-check-label" data-htmlfor={props.name}>
        {props.label}
      </label>
      {props.error && <div className="invalid-feedback">{props.error}</div>}
    </div>
  );
};

export default CheckBoxField;
