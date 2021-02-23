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

    // case FILTER_ACTION_TYPES.SET_FILTERS: {
    //   return {
    //     ...state,
    //     list: action.payload,
    //   };
    // }
    //
    // case FILTER_ACTION_TYPES.RESET_FILTERS: {
    //   return {
    //     ...state,
    //     list: [],
    //     activeFilter: 'all',
    //   };
    // }
    //
    // case FILTER_ACTION_TYPES.SET_ACTIVE_FILTER: {
    //   return {
    //     ...state,
    //     activeFilter: action.payload,
    //   };
    // }

    default:
      return state;
  }
};
