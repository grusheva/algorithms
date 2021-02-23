import { ACTION_TYPES } from './actionTypes';
import { coloredArrayModel } from '../../models';

export const generateNewArray = () => ({
  type: ACTION_TYPES.GENERATE_NEW_ARRAY,
  payload: coloredArrayModel.generate(),
});

/*
export function getListAllBreedsStart() {
  return {
    type: BREEDS_ACTION_TYPES.GET_LIST_ALL_BREEDS_START,
  };
}

export function getListAllBreedsSuccess(payload) {
  return {
    type: BREEDS_ACTION_TYPES.GET_LIST_ALL_BREEDS_SUCCESS,
    payload,
  };
}

export function getListAllBreedsError(error) {
  return {
    type: BREEDS_ACTION_TYPES.GET_LIST_ALL_BREEDS_ERROR,
    error,
  };
}

export function getListAllBreeds() {
  return async dispatch => {
    dispatch(getListAllBreedsStart());

    try {
      const response = await getAllBreeds();
      const {
        data: { message },
      } = response;

      dispatch(getListAllBreedsSuccess(message));
    } catch (error) {
      dispatch(getListAllBreedsError(error));
    }
  };
}
*/
