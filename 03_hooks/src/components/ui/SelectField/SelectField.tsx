import React, { RefObject } from 'react';

import './SelectField.css';

type TProps = {
  label: string;
  name: string;
  defaultOption: string;
  options: { label: string; value: string }[];
  error: string;
  reference: RefObject<HTMLSelectElement>;
  disabledOption: boolean;
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
              ref={props.reference}
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
      {props.error && <p className="errmsg">{props.error}</p>}
    </div>
  );
};
export default SelectField;
