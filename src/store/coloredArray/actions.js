import { ACTION_TYPES } from './actionTypes';
import { coloredArrayModel } from '../../models';
import { getList } from './selectors';

export const generateNewArray = () => ({
  type: ACTION_TYPES.GENERATE_NEW_ARRAY,
  payload: coloredArrayModel.generate(),
});

export const sortBySpectrumCall = () => ({
  type: ACTION_TYPES.SORT_BY_SPECTRUM,
  payload: coloredArrayModel.generate(),
});

export const setSortedArray = payload => ({
  type: ACTION_TYPES.SET_SORTED_ARRAY,
  payload,
});

export function sortBySpectrum(param) {
  return async (dispatch, state) => {
    dispatch(sortBySpectrumCall());
    dispatch(setSortedArray(coloredArrayModel.sortBySpectrum(getList(state()), param)));
  };
}

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
