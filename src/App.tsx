import { ConnectedRouter } from 'connected-react-router';
import * as React from 'react';
import { Provider } from 'react-redux';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Order from './components/order/OrderContainer';
import store, { history } from './store';

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Header />
      <Order />
      <Footer />
    </ConnectedRouter>
  </Provider>
);

export default App;
