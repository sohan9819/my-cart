import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { makeServer } from './server';

import './styles/index.css';

import { BrowserRouter } from 'react-router-dom';
import {
  ThemeContextProvider,
  DataContextProvider,
  CartContextProvider,
  WishContextProvider,
  FilterContextProvider,
} from './context/context';
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeContextProvider>
        <WishContextProvider>
          <CartContextProvider>
            <DataContextProvider>
              <FilterContextProvider>
                <App />
              </FilterContextProvider>
            </DataContextProvider>
          </CartContextProvider>
        </WishContextProvider>
      </ThemeContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
