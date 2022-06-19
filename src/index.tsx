import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './i18n';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
