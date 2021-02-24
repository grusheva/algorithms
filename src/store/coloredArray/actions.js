import { ACTION_TYPES } from './actionTypes';
import { coloredArrayModel } from '../../models';
import { getList } from './selectors';
import { initHistory } from '../select/actions';

export const generateNewArray = () => ({
  type: ACTION_TYPES.GENERATE_NEW_ARRAY,
  payload: coloredArrayModel.generate(),
});

export const sortBySpectrumCall = () => ({
  type: ACTION_TYPES.SORT_BY_SPECTRUM,
});

export const setSortedParamValue = payload => ({
  type: ACTION_TYPES.SET_SORTED_PARAM_VALUE,
  payload,
});

export const setSortedArray = payload => ({
  type: ACTION_TYPES.SET_SORTED_ARRAY,
  payload,
});

export const resetSortedParam = () => setSortedParamValue(null);

export function generateArray() {
  return async dispatch => {
    dispatch(generateNewArray());
    dispatch(initHistory());
  };
}
export function sortBySpectrum(param) {
  return async (dispatch, state) => {
    dispatch(sortBySpectrumCall());
    dispatch(setSortedParamValue(param));
    if (param) {
      dispatch(setSortedArray(coloredArrayModel.sortBySpectrum(getList(state()), param)));
    }
  };
}
