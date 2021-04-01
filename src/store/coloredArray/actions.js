import { ACTION_TYPES } from './actionTypes';
import { coloredArrayModel } from '../../models';
import { getColoredList } from './selectors';

export const getNewArray = () => ({
  type: ACTION_TYPES.GENERATE_NEW_ARRAY,
  payload: coloredArrayModel.generate(),
});

export const getSortedArray = coloredList => ({
  type: ACTION_TYPES.GET_SORTED_ARRAY,
  payload: coloredArrayModel.sortByHex(coloredList),
});

export const getRestructuratedArray = coloredList => ({
  type: ACTION_TYPES.GET_RESTRUCTURATED_ARRAY,
  payload: coloredArrayModel.restructuration(coloredList),
});

export const generateNewArray = () => {
  return async (dispatch, state) => {
    dispatch(getNewArray());
    dispatch(getSortedArray(getColoredList(state())));
    dispatch(getRestructuratedArray(getColoredList(state())));
  };
};

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

export const setStartGenerateNewArray = () => ({
  type: ACTION_TYPES.START_GENERATE_NEW_ARRAY,
});

export const setEndGenerateNewArray = () => ({
  type: ACTION_TYPES.END_GENERATE_NEW_ARRAY,
});

export const resetSortedParam = () => setSortedParamValue(null);

export function generateArray() {
  return async dispatch => {
    dispatch(setStartGenerateNewArray());
    dispatch(generateNewArray());
    dispatch(setEndGenerateNewArray());
  };
}
export function sortBySpectrum(param) {
  return async (dispatch, state) => {
    dispatch(sortBySpectrumCall());
    dispatch(setSortedParamValue(param));
    if (param) {
      dispatch(setSortedArray(coloredArrayModel.sortByChannel(getColoredList(state()), param)));
    }
  };
}
