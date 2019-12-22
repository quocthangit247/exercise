import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import HomepageReducer from '../components/homepage/HomepageReducer';

const reducers = [HomepageReducer];

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    HomepageReducer,
  });

export default createRootReducer;
