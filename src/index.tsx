import React from 'react';
import ReactDOM from 'react-dom';

import GlobalStyles from './styles/Global';
import { App } from './App';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);