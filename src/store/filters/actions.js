import { FILTER_ACTION_TYPES } from './actionTypes';
import { getAllBreeds } from '../../api/breeds';

export function setFilters(payload) {
  return {
    type: FILTER_ACTION_TYPES.SET_FILTERS,
    payload: payload.sort(),
  };
}

export function resetFilters() {
  return {
    type: FILTER_ACTION_TYPES.RESET_FILTERS,
  };
}

export function setActiveFilter(payload) {
  return {
    type: FILTER_ACTION_TYPES.SET_ACTIVE_FILTER,
    payload,
  };
}
