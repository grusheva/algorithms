import { includes } from 'lodash';

import { ACTION_TYPES } from './actionTypes';
import { getList } from '../coloredArray/selectors';
import { setFilterValue } from '../filter/actions';

export function toggleSelectItemId(payload) {
  return {
    type: ACTION_TYPES.TOGGLE_SELECT_ITEM_ID,
    payload,
  };
}

export function updateSelectedIdsArray(payload) {
  return {
    type: ACTION_TYPES.UPDATE_SELECT_IDS_LIST,
    payload,
  };
}

export function selectByFilter(value) {
  return async (dispatch, state) => {
    dispatch(setFilterValue(value));
    const list = getList(state());
    const selectedIdsArray = [];

    list.forEach(({ hex, id }) => {
      if (includes(hex, value)) {
        selectedIdsArray.push(id);
      }
    });

    dispatch(updateSelectedIdsArray(selectedIdsArray));
  };
}
