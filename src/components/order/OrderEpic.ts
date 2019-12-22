import { combineEpics, ofType } from 'redux-observable';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { GET_DATA } from '../../store/actionTypes';
import { getDataFail, getDataSuccess } from './OrderActions';

export const getDataEpic = (action$, store$, { getDataService }) => {
  return action$.pipe(
    ofType(GET_DATA),
    switchMap(() =>
      getDataService().pipe(
        map(res => getDataSuccess(res)),
        catchError(err => of(getDataFail(err)))
      )
    )
  );
};

export default combineEpics(getDataEpic);
