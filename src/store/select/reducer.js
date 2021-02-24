import { includes } from 'lodash';

import { ACTION_TYPES } from './actionTypes';

const defaultState = {
  list: [],
  history: [],
  historyArrow: 0,
};

export const select = (state = defaultState, action) => {
  switch (action.type) {
    case ACTION_TYPES.INIT_HISTORY: {
      return {
        ...state,
        history: [[...state.list]],
      };
    }

    case ACTION_TYPES.TOGGLE_SELECT_ITEM_ID: {
      const newList = includes(state.list, action.payload)
        ? state.list.filter(item => item !== action.payload)
        : [...state.list, action.payload];

      return {
        ...state,
        history: [...state.history.slice(0, state.history.length + state.historyArrow), newList],
        list: newList,
        historyArrow: defaultState.historyArrow,
      };
    }

    case ACTION_TYPES.UPDATE_SELECT_IDS_LIST: {
      return {
        ...state,
        history: [
          ...state.history.slice(0, state.history.length + state.historyArrow),
          [...action.payload],
        ],
        list: action.payload,
        historyArrow: defaultState.historyArrow,
      };
    }

    case ACTION_TYPES.SET_HISTORY_ARROW: {
      return {
        ...state,
        historyArrow: action.payload,
      };
    }

    case ACTION_TYPES.SET_HISTORY_BACK: {
      return {
        ...state,
        list: action.payload,
      };
    }

    default:
      return state;
  }
};
