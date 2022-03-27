import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { makeServer } from './server';

import './styles/index.css';

import { BrowserRouter } from 'react-router-dom';
import { ThemeContextProvider } from './context/ThemeContext';
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
