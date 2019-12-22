import { createAction } from 'redux-actions';
import { GET_DATA, GET_DATA_SUCCESS, GET_DATA_FAIL } from '../../store/actionTypes';

export const getData = createAction(GET_DATA);
export const getDataSuccess = createAction(GET_DATA_SUCCESS);
export const getDataFail = createAction(GET_DATA_FAIL);
