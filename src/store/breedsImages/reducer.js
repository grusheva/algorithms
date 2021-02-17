import { BREEDS_IMAGES_ACTION_TYPES } from './actionTypes';

const defaultState = {
  isLoading: false,
  images: {},
  error: null,
};

export const breedsImages = (state = defaultState, action) => {
  switch (action.type) {
    case BREEDS_IMAGES_ACTION_TYPES.RESET_IMAGES: {
      return {
        ...state,
        images: {},
      };
    }

    case BREEDS_IMAGES_ACTION_TYPES.GET_BREEDS_IMAGES_START:
    case BREEDS_IMAGES_ACTION_TYPES.GET_BREED_IMAGES_START: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case BREEDS_IMAGES_ACTION_TYPES.GET_BREED_IMAGES_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        images: {
          ...state.images,
          ...action.payload,
        },
      };
    }
    case BREEDS_IMAGES_ACTION_TYPES.GET_BREEDS_IMAGES_ERROR: {
      return {
        ...state,
        error: action.error,
      };
    }

    default:
      return state;
  }
};
