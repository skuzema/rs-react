import React from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';

import { TPCardForm } from '../../../models/IArticles';
import './TextArea.scss';

type TProps = {
  label: string;
  type?: string;
  name: string;
  register: ReturnType<UseFormRegister<TPCardForm>>;
  error: FieldError | undefined;
  rows: number;
  cols: number;
};

const TextArea = (props: TProps) => {
  return (
    <div>
      <label data-htmlfor={props.name}>{props.label}</label>
      <div>
        <textarea
          data-id={props.name}
          data-name={props.name}
          data-testid={props.name}
          {...props.register}
          rows={props.rows}
          cols={props.cols}
          className="form-input"
        />
        {props.error && <p className="errmsg">{props.error.message}</p>}
      </div>
    </div>
  );
};

export default TextArea;
