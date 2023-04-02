import React, { RefObject } from 'react';

import './TextArea.css';

type TProps = {
  label: string;
  type?: string;
  name: string;
  reference: RefObject<HTMLTextAreaElement>;
  error: string;
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
          ref={props.reference}
          rows={props.rows}
          cols={props.cols}
          className="form-input"
        />
        {props.error && <p className="errmsg">{props.error}</p>}
      </div>
    </div>
  );
};

export default TextArea;
