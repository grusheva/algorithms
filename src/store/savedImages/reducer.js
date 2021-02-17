import { SAVED_IMAGES_ACTION_TYPES } from './actionTypes';

const defaultState = {
  list: [],
};

export const savedImages = (state = defaultState, action) => {
  switch (action.type) {
    case SAVED_IMAGES_ACTION_TYPES.ADD_IMAGE: {
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    }

    case SAVED_IMAGES_ACTION_TYPES.REMOVE_IMAGE: {
      return {
        ...state,
        list: state.list.filter(image => image !== action.payload),
      };
    }

    default:
      return state;
  }
};
