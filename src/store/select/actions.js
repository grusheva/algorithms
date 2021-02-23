import { ACTION_TYPES } from './actionTypes';

export function toggleSelectItemId(payload) {
  return {
    type: ACTION_TYPES.TOGGLE_SELECT_ITEM_ID,
    payload,
  };
}

// export function setFilters(payload) {
//   return {
//     type: FILTER_ACTION_TYPES.SET_FILTERS,
//     payload: payload.sort(),
//   };
// }
//
// export function resetFilters() {
//   return {
//     type: FILTER_ACTION_TYPES.RESET_FILTERS,
//   };
// }
//
// export function setActiveFilter(payload) {
//   return {
//     type: FILTER_ACTION_TYPES.SET_ACTIVE_FILTER,
//     payload,
//   };
// }
