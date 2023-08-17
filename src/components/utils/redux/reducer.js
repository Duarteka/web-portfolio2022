/* eslint-disable default-param-last */
import { combineReducers } from 'redux';
import * as actions from './actions';

// eslint-disable-next-line default-param-last
const preferences = (
  state = { darkThemeEnabled: false, isSpecialComponentVisible: false },
  action
) => {
  switch (action.type) {
    case actions.TOGGLE_DARKTHEME:
      return { ...state, darkThemeEnabled: !state.darkThemeEnabled };

    case actions.TOGGLE_SPECIAL_COMPONENT:
      return { ...state, isSpecialComponentVisible: action.payload };

    default:
      return state;
  }
};

export default combineReducers({ preferences });
