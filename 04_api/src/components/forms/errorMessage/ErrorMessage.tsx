import React from 'react';

import img from './error.svg';
import './ErrorMessage.scss';

const ErrorMessage = () => {
  return (
    <div className="error">
      <img
        style={{
          display: 'block',
          width: '150px',
          height: '150px',
          objectFit: 'contain',
          margin: '0 auto',
        }}
        src={img}
        alt="Error"
      />
      <h2>Something went wrong!</h2>
    </div>
  );
};

export default ErrorMessage;
