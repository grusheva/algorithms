import { includes } from 'lodash';

import { ACTION_TYPES } from './actionTypes';

const defaultState = {
  list: [],
};

export const select = (state = defaultState, action) => {
  switch (action.type) {
    case ACTION_TYPES.TOGGLE_SELECT_ITEM_ID: {
      return {
        ...state,
        list: includes(state.list, action.payload)
          ? state.list.filter(item => item !== action.payload)
          : [...state.list, action.payload],
      };
    }

    case ACTION_TYPES.UPDATE_SELECT_IDS_LIST: {
      return {
        ...state,
        list: action.payload,
      };
    }

    default:
      return state;
  }
};
