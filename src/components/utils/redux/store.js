import { legacy_createStore as createStore } from 'redux';
import themeReducer from './reducer';

const localStorageKey = 'theme';
const persistedTheme = localStorage.getItem(localStorageKey);

const initialState = {
  preferences: persistedTheme ? JSON.parse(persistedTheme) : {}
};
const store = createStore(themeReducer, initialState);
store.subscribe(() => {
  const { preferences } = store.getState();
  if (!preferences) return;

  localStorage.setItem(localStorageKey, JSON.stringify(preferences));
});

export { store };
