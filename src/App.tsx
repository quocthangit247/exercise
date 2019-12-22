import { ConnectedRouter } from 'connected-react-router';
import * as React from 'react';
import { Provider } from 'react-redux';
import Header from './components/header/Header';
import Order from './components/order/OrderContainer';
import store, { history } from './store';

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Header />
      <Order />
    </ConnectedRouter>
  </Provider>
);

export default App;
