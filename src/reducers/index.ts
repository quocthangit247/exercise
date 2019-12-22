import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import HomepageReducer from '../components/order/OrderReducer';

const reducers = [HomepageReducer];

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    HomepageReducer,
  });

export default createRootReducer;
