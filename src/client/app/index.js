import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import AppComponent from './components/AppComponent.jsx';
// import AppComponent from './app';

const store = configureStore();

render(
  <Provider store={store}>
    <AppComponent />
  </Provider>,
  document.getElementById('root'),
);
