import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { coloredArray } from './coloredArray/reducer';
import { filters } from './filters/reducer';

export const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    coloredArray,
    filters,
  });
