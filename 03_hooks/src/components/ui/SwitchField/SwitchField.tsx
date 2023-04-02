import React, { RefObject } from 'react';

import './SwitchField.scss';

type TProps = {
  label: string;
  type?: string;
  name: string;
  reference: RefObject<HTMLInputElement>;
  error: string;
  options: string[];
};

const SwitchField = (props: TProps) => {
  return (
    <div className="switcher">
      <span>{props.options[0]}</span>
      <input
        className="checkbox"
        type="checkbox"
        name={props.name}
        ref={props.reference}
        data-testid={props.name}
      />
      <span>{props.options[1]}</span>
      {props.label && (
        <label className="form-check-label" data-htmlfor={props.name}>
          {props.label}
        </label>
      )}
      {props.error && <div className="invalid-feedback">{props.error}</div>}
    </div>
  );
};

export default SwitchField;
