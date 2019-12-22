import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createEpicMiddleware } from 'redux-observable';
import ApiService from '../config/apiService';
import rootEpic from '../epics';
import rootReducer from '../reducers';

export const history = createBrowserHistory();

const initialState = {};

const enhancers = [];
const epicMiddleware = createEpicMiddleware({
  dependencies: {
    // new api
    getDataService: ApiService.getData,
  },
});

const middleware = [routerMiddleware(history), epicMiddleware];

declare global {
  interface Window { __REDUX_DEVTOOLS_EXTENSION__: any; }
}

if (process.env.NODE_ENV === 'development') {
  if (typeof window !== 'undefined') {
    // eslint-disable-next-line no-underscore-dangle
    enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

const store = createStore(rootReducer(history), initialState, composedEnhancers);
epicMiddleware.run(rootEpic);

export default store;
