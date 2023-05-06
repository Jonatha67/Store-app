import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'tailwindcss/tailwind.css';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cartSlice';
import { Provider } from 'react-redux';
import Footer from './Components/Footer';
const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore ({
  reducer:{
    cart: cartReducer
  }
})

root.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>
);


