import { ACTION_TYPES } from './actionTypes';

const defaultState = {
  list: [],
  error: null,
};

export const coloredArray = (state = defaultState, action) => {
  switch (action.type) {
    case ACTION_TYPES.GENERATE_NEW_ARRAY: {
      return {
        ...state,
        list: action.payload,
      };
    }

    default:
      return state;
  }
};
