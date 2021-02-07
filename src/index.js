import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Tvoc from './tvoc/tvoc';

ReactDOM.render(
  <React.StrictMode>
    <Tvoc/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
