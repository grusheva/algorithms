import { includes } from 'lodash';

import { ACTION_TYPES } from './actionTypes';
import { getList } from '../coloredArray/selectors';
import { setFilterValue } from '../filter/actions';
import { getHistory, getHistoryArrow } from './selectors';
import { sumInLimits } from '../../utils';

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
    const list = getList(state());
    const selectedIdsArray = [];

    list.forEach(({ hex, id }) => {
      if (includes(hex, value)) {
        selectedIdsArray.push(id);
      }
    });

    dispatch(updateSelectedIdsArray(selectedIdsArray));
  };
};

export const setHistoryArrow = payload => ({
  type: ACTION_TYPES.SET_HISTORY_ARROW,
  payload,
});

export const setSelectedFromHistory = payload => ({
  type: ACTION_TYPES.SET_HISTORY_BACK,
  payload,
});

export const initHistory = () => ({
  type: ACTION_TYPES.INIT_HISTORY,
});

export const setSelectedHistory = value => {
  return async (dispatch, state) => {
    const history = getHistory(state());
    const getNewHistoryArrow = sumInLimits(getHistoryArrow(state()), value);

    if (Math.abs(getNewHistoryArrow) > history.length) {
      return;
    }

    dispatch(setHistoryArrow(getNewHistoryArrow));
    dispatch(setSelectedFromHistory(history[history.length + getNewHistoryArrow - 1]));
  };
};

export const setSelectedHistoryBack = () => setSelectedHistory(-1);
export const setSelectedHistoryNext = () => setSelectedHistory(1);
