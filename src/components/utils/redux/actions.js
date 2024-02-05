export const TOGGLE_DARKTHEME = 'TOGGLE_DARKTHEME';
export const TOGGLE_SPECIAL_COMPONENT = 'TOGGLE_SPECIAL_COMPONENT';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';

export const toggleDarkTheme = (isOpen) => ({
  type: TOGGLE_DARKTHEME,
  payload: isOpen
});
export const toggleModal = (isOpen) => ({
  type: TOGGLE_MODAL,
  payload: isOpen
});
