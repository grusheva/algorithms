import { BREEDS_ACTION_TYPES } from './actionTypes';

const defaultState = {
  isLoading: false,
  list: [],
  error: null,
};

export const breeds = (state = defaultState, action) => {
  switch (action.type) {
    case BREEDS_ACTION_TYPES.GET_LIST_ALL_BREEDS_START: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case BREEDS_ACTION_TYPES.GET_LIST_ALL_BREEDS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        list: action.payload,
      };
    }
    case BREEDS_ACTION_TYPES.GET_LIST_ALL_BREEDS_ERROR: {
      return {
        ...state,
        error: action.error,
      };
    }

    default:
      return state;
  }
};
