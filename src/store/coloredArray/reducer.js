import { ACTION_TYPES } from './actionTypes';

const defaultState = {
  list: [],
  param: null,
  isLoading: true,
};

export const coloredArray = (state = defaultState, action) => {
  switch (action.type) {
    case ACTION_TYPES.GENERATE_NEW_ARRAY: {
      return {
        ...state,
        list: action.payload,
      };
    }

    case ACTION_TYPES.SET_SORTED_ARRAY: {
      return {
        ...state,
        list: action.payload,
      };
    }

    case ACTION_TYPES.SET_SORTED_PARAM_VALUE: {
      return {
        ...state,
        param: action.payload,
      };
    }

    case ACTION_TYPES.START_GENERATE_NEW_ARRAY: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case ACTION_TYPES.END_GENERATE_NEW_ARRAY: {
      return {
        ...state,
        isLoading: false,
      };
    }

    default:
      return state;
  }
};
