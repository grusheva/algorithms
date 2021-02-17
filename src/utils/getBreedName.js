import { includes } from 'lodash';

const allBreedsStr = 'hound-';
const subBreedStr = '-';

export const getBreedName = link => {
  const breed = link.split('/')[4];

  if (includes(breed, allBreedsStr)) {
    return breed.slice(allBreedsStr.length);
  }

  return breed;
};

export const getBreedWithSubBreed = breedWithSubBreed =>
  includes(breedWithSubBreed, subBreedStr)
    ? breedWithSubBreed.replace(subBreedStr, ', ')
    : breedWithSubBreed;
