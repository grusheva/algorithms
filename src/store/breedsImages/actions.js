import { isEmpty } from 'lodash';

import { BREEDS_IMAGES_ACTION_TYPES } from './actionTypes';
import { getAllBreedImages } from '../../api/breeds';

export function getBreedsImagesStart() {
  return {
    type: BREEDS_IMAGES_ACTION_TYPES.GET_BREEDS_IMAGES_START,
  };
}

export function getBreedsImagesSuccess(payload) {
  return {
    type: BREEDS_IMAGES_ACTION_TYPES.GET_BREEDS_IMAGES_SUCCESS,
    payload,
  };
}

export function getBreedsImagesError(error) {
  return {
    type: BREEDS_IMAGES_ACTION_TYPES.GET_BREEDS_IMAGES_ERROR,
    error,
  };
}

export function getBreedImagesStart() {
  return {
    type: BREEDS_IMAGES_ACTION_TYPES.GET_BREED_IMAGES_START,
  };
}

export function resetImages() {
  return {
    type: BREEDS_IMAGES_ACTION_TYPES.RESET_IMAGES,
  };
}

export function getBreedImagesSuccess(payload) {
  return {
    type: BREEDS_IMAGES_ACTION_TYPES.GET_BREED_IMAGES_SUCCESS,
    payload,
  };
}

export function getBreedImagesError(error) {
  return {
    type: BREEDS_IMAGES_ACTION_TYPES.GET_BREED_IMAGES_ERROR,
    error,
  };
}

export function getBreedImages(breed) {
  return async dispatch => {
    dispatch(getBreedImagesStart());

    try {
      const response = await getAllBreedImages(breed);
      const {
        data: { message },
      } = response;
      const payload = { [breed]: message };

      dispatch(getBreedImagesSuccess(payload));
    } catch (error) {
      dispatch(getBreedImagesError());
    }
  };
}

export function getBreedsImages(breeds) {
  return async dispatch => {
    dispatch(getBreedsImagesStart());

    try {
      isEmpty(breeds)
        ? dispatch(getBreedImages('hound'))
        : breeds.map(breed => {
            dispatch(getBreedImages(breed));
          });
    } catch (error) {
      dispatch(getBreedsImagesError());
    }
  };
}
