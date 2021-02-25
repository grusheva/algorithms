import { ACTION_TYPES } from './actionTypes';

const defaultState = {
  selectedIdsMap: {},
  history: [],
  historyArrow: 0,
};

export const select = (state = defaultState, action) => {
  switch (action.type) {
    case ACTION_TYPES.INIT_HISTORY: {
      return {
        ...state,
        history: [{ ...state.selectedIdsMap }],
      };
    }

    case ACTION_TYPES.TOGGLE_SELECT_ITEM_ID: {
      const newSelectedMap = {
        ...state.selectedIdsMap,
        [action.payload]: !state.selectedIdsMap[action.payload],
      };

      return {
        ...state,
        history: [
          ...state.history.slice(0, state.history.length + state.historyArrow),
          newSelectedMap,
        ],
        selectedIdsMap: newSelectedMap,
        historyArrow: defaultState.historyArrow,
      };
    }

    case ACTION_TYPES.UPDATE_SELECT_IDS_LIST: {
      return {
        ...state,
        history: [
          ...state.history.slice(0, state.history.length + state.historyArrow),
          { ...action.payload },
        ],
        selectedIdsMap: action.payload,
        historyArrow: defaultState.historyArrow,
      };
    }

    case ACTION_TYPES.SET_HISTORY_ARROW: {
      return {
        ...state,
        historyArrow: action.payload,
      };
    }

    case ACTION_TYPES.SET_SELECTED_FROM_HISTORY: {
      return {
        ...state,
        selectedIdsMap: action.payload,
      };
    }

    default:
      return state;
  }
};
