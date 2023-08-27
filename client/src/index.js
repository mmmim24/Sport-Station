import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from 'react-router-dom' ;
import App from './App';
// import Reducer,{initialState} from './hooks/Reducer';
// import { StateProvider } from './context/StateProvider';
import { CartProvider } from './context/cart_context';


ReactDOM.render(
  <React.StrictMode>
      {/* <StateProvider initialState={initialState} reducer={Reducer}> */}
      <CartProvider>

        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartProvider>
      {/* </StateProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
);


