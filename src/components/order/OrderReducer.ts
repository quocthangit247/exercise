import { handleActions } from 'redux-actions';
import { GET_DATA, GET_DATA_FAIL, GET_DATA_SUCCESS } from '../../store/actionTypes';

const initialState = {
  data: [],
  err: {},
  isLoading: false,
};

const actions = {
  [GET_DATA]: state => ({
    ...state,
    data: [],
    err: {},
    isLoading: true,
  }),
  [GET_DATA_SUCCESS]: (state, { payload }) => ({
    ...state,
    isLoading: false,
    data: payload.data,
  }),
  [GET_DATA_FAIL]: (state, { payload }) => ({
    ...state,
    isLoading: false,
    err: payload,
  }),
};

export default handleActions(actions, initialState);
