import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import cdChallenge from './reducers';
import AppComponent from './components/AppComponent.jsx';

const store = createStore(cdChallenge);

render(
  <Provider store={store}>
    <AppComponent />
  </Provider>,
  document.getElementById('root'),
);
