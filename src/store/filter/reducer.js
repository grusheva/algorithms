import { ACTION_TYPES } from './actionTypes';

const defaultState = {
  value: '',
};

export const filter = (state = defaultState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_FILTER_VALUE: {
      return {
        ...state,
        value: action.payload,
      };
    }

    default:
      return state;
  }
};
