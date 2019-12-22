import { combineEpics } from 'redux-observable';
import HomepageEpic from '../components/order/OrderEpic';

const epics = [HomepageEpic];

const rootEpic = combineEpics(...epics);

export default rootEpic;
