import { ACTION_TYPES } from './actionTypes';
import { Stack } from '../../models';

const defaultState = {
  selectedIdsMap: {},
  history: { back: new Stack(), next: new Stack() },
};

export const select = (state = defaultState, action) => {
  switch (action.type) {
    case ACTION_TYPES.TOGGLE_SELECT_ITEM_ID: {
      const newSelectedMap = {
        ...state.selectedIdsMap,
        [action.payload]: !state.selectedIdsMap[action.payload],
      };

      state.history.back.push(state.selectedIdsMap);

      return {
        ...state,
        history: { ...state.history, next: new Stack() },
        selectedIdsMap: newSelectedMap,
      };
    }

    case ACTION_TYPES.UPDATE_SELECT_IDS_LIST: {
      state.history.back.push(state.selectedIdsMap);

      return {
        ...state,
        history: { ...state.history, next: new Stack() },
        selectedIdsMap: action.payload,
      };
    }

    case ACTION_TYPES.SET_HISTORY_BACK: {
      state.history.next.push(state.selectedIdsMap);

      return {
        ...state,
        selectedIdsMap: state.history.back.pop(),
      };
    }

    case ACTION_TYPES.SET_HISTORY_NEXT: {
      state.history.back.push(state.selectedIdsMap);

      return {
        ...state,
        selectedIdsMap: state.history.next.pop(),
      };
    }

    default:
      return state;
  }
};
