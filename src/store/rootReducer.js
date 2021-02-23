import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { coloredArray } from './coloredArray/reducer';
import { select } from './select/reducer';
import { filter } from './filter/reducer';

export const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    coloredArray,
    select,
    filter,
  });
