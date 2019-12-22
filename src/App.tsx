import * as React from 'react';
import { Provider } from 'react-redux';
import Homepage from './components/homepage/Homepage';
import store, { history } from './store';
import { ConnectedRouter } from 'connected-react-router';

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Homepage />
    </ConnectedRouter>
  </Provider>
);

export default App;
