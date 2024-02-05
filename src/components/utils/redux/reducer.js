/* eslint-disable no-console */
/* eslint-disable default-param-last */
import { combineReducers } from 'redux';
import * as actions from './actions';

// eslint-disable-next-line default-param-last

const initialState = {
  darkThemeEnabled: false,
  isSpecialComponentVisible: false,
  isModalOpen: true // asumiendo que el modal está abierto por defecto
};
const preferences = (state = initialState, action) => {
  switch (action.type) {
    case actions.TOGGLE_DARKTHEME:
      return { ...state, darkThemeEnabled: !state.darkThemeEnabled };

    case actions.TOGGLE_SPECIAL_COMPONENT:
      return { ...state, isSpecialComponentVisible: action.payload };

    case actions.TOGGLE_MODAL:
      return { ...state, isModalOpen: action.payload };

    default:
      return state;
  }
};

export default combineReducers({ preferences });
