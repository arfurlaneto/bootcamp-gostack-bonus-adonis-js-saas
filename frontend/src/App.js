import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import Routes from './routes';

import GlobalStyles from './styles/global';

const App = () => (
  <>
    <Provider store={store}>
      <Routes />
      <GlobalStyles />
    </Provider>
  </>
);

export default App;
