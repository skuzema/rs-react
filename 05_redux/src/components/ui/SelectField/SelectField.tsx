import React from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';

import { TPCardForm } from '../../../models/IArticles';
import './SelectField.scss';

type TProps = {
  label: string;
  name: string;
  defaultOption: string;
  options: { label: string; value: string }[];
  disabledOption: boolean;
  register: ReturnType<UseFormRegister<TPCardForm>>;
  error: FieldError | undefined;
};

const SelectField = (props: TProps) => {
  return (
    <div>
      <label data-htmlfor={props.name}>{props.label}</label>
      <div>
        {
          <>
            <select
              data-id={props.name}
              data-name={props.name}
              data-testid={props.name}
              {...props.register}
              className="form-select"
            >
              <option disabled={props.disabledOption} value="DEFAULT" key="DEFAULT">
                {props.defaultOption}
              </option>
              {props.options &&
                props.options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
            </select>
            <span />
          </>
        }
      </div>
      {props.error && <p className="errmsg">{props.error.message}</p>}
    </div>
  );
};
export default SelectField;
