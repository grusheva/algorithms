import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';

import { createRootReducer } from './rootReducer';

export const history = createBrowserHistory();

export const store = createStore(
  createRootReducer(history),
  composeWithDevTools(applyMiddleware(routerMiddleware(history))),
);
