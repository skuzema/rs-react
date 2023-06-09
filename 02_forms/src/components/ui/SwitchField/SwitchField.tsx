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

class SwitchField extends React.Component<TProps> {
  state = { isChecked: true };
  getInputClasses = () => {
    return 'form-check-input' + (this.props.error ? ' is-invalid' : '');
  };
  render(): React.ReactNode {
    return (
      <div className="switcher">
        <span>{this.props.options[0]}</span>
        <input
          className="checkbox"
          type="checkbox"
          name={this.props.name}
          ref={this.props.reference}
        />
        <span>{this.props.options[1]}</span>
        {this.props.label && (
          <label className="form-check-label" data-htmlfor={this.props.name}>
            {this.props.label}
          </label>
        )}
        {this.props.error && <div className="invalid-feedback">{this.props.error}</div>}
      </div>
    );
  }
}

export default SwitchField;
