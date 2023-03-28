import React, { RefObject } from 'react';

import './TextArea.css'

type TProps = {
  label: string;
  type?: string;
  name: string;
  reference: RefObject<HTMLTextAreaElement>;
  error: string;
  rows: number;
  cols: number;
};

type TState = { showPassword: boolean };

class TextArea extends React.Component<TProps, TState> {
  static defaultProps: { type: string };
  constructor(props: Readonly<TProps>) {
    super(props);
    this.state = { showPassword: false };
  }

  render(): React.ReactNode {
    return (
      <div>
        <label data-htmlfor={this.props.name}>{this.props.label}</label>
        <div>
          <textarea
            data-id={this.props.name}
            data-name={this.props.name}
            ref={this.props.reference}
            rows={this.props.rows}
            cols={this.props.cols}
          />
          {this.props.error && <p className="errmsg">{this.props.error}</p>}
        </div>
      </div>
    );
  }
}

export default TextArea;
