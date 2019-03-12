import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { addLocaleData } from "react-intl";
import en from "react-intl/locale-data/en";
import es from "react-intl/locale-data/es";
import ConnectedIntlProvider from './connectedIntlProvider';
import rootReducer from './reducer';
import HomePage from './container/HomePage';
// import SampleComponent from '../../src';

addLocaleData([...en, ...es]);

const store = createStore(rootReducer);

const App = () => (
    <HomePage />
);
ReactDOM.render(
  <Provider store={store}>
    <ConnectedIntlProvider>
      <App />
    </ConnectedIntlProvider>
  </Provider>,
  document.getElementById("root")
);
