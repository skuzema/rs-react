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

class SelectField extends React.Component<TProps> {
  handleChange = () => {
    
  };

  render(): React.ReactNode {
    return (
      <div>
        <label data-htmlfor={this.props.name}>{this.props.label}</label>
        <div>
          {
            <>
              <select
                data-id={this.props.name}
                data-name={this.props.name}
                ref={this.props.reference}
              >
                <option disabled={this.props.disabledOption} value="DEFAULT" key="DEFAULT">
                  {this.props.defaultOption}
                </option>
                {this.props.options &&
                  this.props.options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
              </select>
              <span />
            </>
          }
        </div>
        {this.props.error && <p className="errmsg">{this.props.error}</p>}
      </div>
    );
  }
}
export default SelectField;
