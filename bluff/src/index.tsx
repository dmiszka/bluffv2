import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './tsx/App';
import reportWebVitals from './reportWebVitals';
import Main from './tsx/Main';
import Players from './tsx/Players';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    <Main />
    <Players />
  </React.StrictMode>
);
reportWebVitals();
