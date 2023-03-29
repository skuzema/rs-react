import React, { RefObject } from 'react';

import './TextField.css';

type TProps = {
  label: string;
  type?: string;
  name: string;
  reference: RefObject<HTMLInputElement>;
  error: string;
  accept: string;
};

type TState = { showPassword: boolean };

class TextField extends React.Component<TProps, TState> {
  static defaultProps: { type: string };
  constructor(props: Readonly<TProps>) {
    super(props);
    this.state = { showPassword: false };
  }

  handleChange = () => {};

  toggleShowPassword = () => {
    this.setState((prevState) => {
      !prevState.showPassword;
    });
  };
  render(): React.ReactNode {
    return (
      <div>
        <label data-htmlfor={this.props.name}>{this.props.label}</label>
        <div>
          <input
            type={this.state.showPassword ? 'text' : this.props.type}
            data-id={this.props.name}
            data-name={this.props.name}
            onChange={this.handleChange}
            ref={this.props.reference}
            className="form-input"
            accept={this.props.accept}
          />
          {this.props.error && <p className="errmsg">{this.props.error}</p>}
          {this.props.type === 'password' && (
            <label htmlFor="chk">
              <input
                type="checkbox"
                id="chk"
                onChange={this.toggleShowPassword}
                checked={this.state.showPassword}
              />
              {'show password'}
            </label>
          )}
        </div>
      </div>
    );
  }
}
TextField.defaultProps = {
  type: 'text',
};

export default TextField;
