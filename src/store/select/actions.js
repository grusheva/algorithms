import { ACTION_TYPES } from './actionTypes';
import {
  getColoredHexSortedList,
  // getColoredMap,
} from '../coloredArray/selectors';
import { setFilterValue } from '../filter/actions';
import { getHistory } from './selectors';
import {
  binarySearch,
  // getFiniteValues
} from '../../utils';

export const toggleSelectItemId = payload => ({
  type: ACTION_TYPES.TOGGLE_SELECT_ITEM_ID,
  payload,
});

export const updateSelectedIdsArray = payload => ({
  type: ACTION_TYPES.UPDATE_SELECT_IDS_LIST,
  payload,
});

export const selectByFilter = value => {
  return async (dispatch, state) => {
    dispatch(setFilterValue(value));

    if (value.length > 6) {
      return dispatch(updateSelectedIdsArray({}));
    }

    if (value === 0 || value) {
      const list = getColoredHexSortedList(state());
      const selectedIdsMap = binarySearch(list, value);
      dispatch(updateSelectedIdsArray(selectedIdsMap));

      // experiment with another structure
      // const list1 = getColoredMap(state());
      // let selectedIdsMap1 = getFiniteValues(list1[value[0]]);
      // dispatch(updateSelectedIdsArray(selectedIdsMap1));
    } else {
      dispatch(updateSelectedIdsArray({}));
    }
  };
};

export const setHistoryBack = () => ({
  type: ACTION_TYPES.SET_HISTORY_BACK,
});

export const setHistoryNext = () => ({
  type: ACTION_TYPES.SET_HISTORY_NEXT,
});

export const setSelectedHistoryBack = () => {
  return async (dispatch, state) => {
    const history = getHistory(state());
    if (history.back.size) {
      dispatch(setHistoryBack());
    }
  };
};

export const setSelectedHistoryNext = () => {
  return async (dispatch, state) => {
    const history = getHistory(state());
    if (history.next.size) {
      dispatch(setHistoryNext());
    }
  };
};
