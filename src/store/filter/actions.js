import { ACTION_TYPES } from './actionTypes';

export const setFilterValue = value => ({
  type: ACTION_TYPES.SET_FILTER_VALUE,
  payload: value,
});

export const resetFilterValue = () => setFilterValue('');
