import React from 'react';
import ReactDOM from 'react-dom/client';
import { unmountComponentAtNode } from 'react-dom';
import App from './components/app/App';

describe('App component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.createRoot(div).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    unmountComponentAtNode(div);
  });
});
