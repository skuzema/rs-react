import React, { useState, RefObject } from 'react';

import './TextField.css';

type TProps = {
  label: string;
  type?: string;
  name: string;
  reference: RefObject<HTMLInputElement>;
  error: string;
  accept: string;
};

const TextField = (props: TProps) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      <label data-htmlfor={props.name}>{props.label}</label>
      <div>
        <input
          type={showPassword ? 'text' : props.type}
          data-id={props.name}
          data-name={props.name}
          ref={props.reference}
          className="form-input"
          accept={props.accept}
          data-testid={props.name}
        />
        {props.error && <p className="errmsg">{props.error}</p>}
        {props.type === 'password' && (
          <label htmlFor="chk">
            <input
              type="checkbox"
              id="chk"
              onChange={() => setShowPassword(!showPassword)}
              checked={showPassword}
            />
            {'show password'}
          </label>
        )}
      </div>
    </div>
  );
};
TextField.defaultProps = {
  type: 'text',
};

export default TextField;
