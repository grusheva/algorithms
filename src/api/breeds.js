import api from './setupApi';
import {
  LIST_ALL_URL,
  RANDOM_IMAGE_URL,
  LIST_BREED_IMAGES_URL,
  LIST_SUB_BREED_URL,
} from '../constants/apiUrl';

export const getAllBreeds = () => api.get(LIST_ALL_URL);

export const getRandomImage = () => api.get(RANDOM_IMAGE_URL);

export const getAllBreedImages = breed => api.get(`breed/${breed}${LIST_BREED_IMAGES_URL}`);

export const getSubBreed = breed => api.get(`${breed}/${LIST_SUB_BREED_URL}`);
