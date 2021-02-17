import { SAVED_IMAGES_ACTION_TYPES } from './actionTypes';
import { getAllBreeds } from '../../api/breeds';

export function addImage(payload) {
  return {
    type: SAVED_IMAGES_ACTION_TYPES.ADD_IMAGE,
    payload,
  };
}

export function removeImage(payload) {
  return {
    type: SAVED_IMAGES_ACTION_TYPES.REMOVE_IMAGE,
    payload,
  };
}
