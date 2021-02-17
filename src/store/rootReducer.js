import { combineReducers } from 'redux';
import { breeds } from './breeds/reducer';
import { breedsImages } from './breedsImages/reducer';
import { filters } from './filters/reducer';
import { savedImages } from './savedImages/reducer';

const reducers = combineReducers({
  breeds,
  breedsImages,
  filters,
  savedImages,
});

export default reducers;
