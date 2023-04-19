import React, { useState } from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';

import { TPCardForm } from '../../../models/IArticles';
import './TextField.scss';

type TProps = {
  label: string;
  type?: string;
  name: string;
  register: ReturnType<UseFormRegister<TPCardForm>>;
  error: FieldError | undefined;
  accept?: string;
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
          {...props.register}
          className="form-input"
          data-testid={props.name}
          accept={props.accept}
        />
        {props.error && <p className="errmsg">{props.error.message}</p>}
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
