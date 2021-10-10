import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';


import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import Header from './layout/Header';
import Alerts from './layout/Alerts';

import { Provider } from 'react-redux';

import store from '../store';





// Alert Options
const alertOptions = {
    timeout: 3000,
    position: 'top center',
  };



ReactDOM.render(
    <Provider store={store}>
          <AlertProvider template={AlertTemplate} {...alertOptions}>
  <React.StrictMode>
  <Header/>
  <Alerts />
    <App />
  </React.StrictMode>
  </AlertProvider>
  </Provider>,
  document.getElementById('root')
);


