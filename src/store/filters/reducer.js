import { FILTER_ACTION_TYPES } from './actionTypes';

const defaultState = {
  list: [],
  activeFilter: 'all',
};

export const filters = (state = defaultState, action) => {
  switch (action.type) {
    case FILTER_ACTION_TYPES.SET_FILTERS: {
      return {
        ...state,
        list: action.payload,
      };
    }

    case FILTER_ACTION_TYPES.RESET_FILTERS: {
      return {
        ...state,
        list: [],
        activeFilter: 'all',
      };
    }

    case FILTER_ACTION_TYPES.SET_ACTIVE_FILTER: {
      return {
        ...state,
        activeFilter: action.payload,
      };
    }

    default:
      return state;
  }
};
