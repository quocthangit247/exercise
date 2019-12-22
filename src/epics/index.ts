import { combineEpics } from 'redux-observable';
import HomepageEpic from '../components/homepage/HomepageEpic';

const epics = [HomepageEpic];

const rootEpic = combineEpics(...epics);

export default rootEpic;
