import { AppState } from '../app.state';
import { uiState } from './ui.reducer';
import { createSelector } from '@ngrx/store';

export const uiSelector = (state: AppState) => state.ui;

export const sideNavOpenedSelector = createSelector(
  uiSelector,
  (state: uiState) => state.sideNavOpened
);
export const filterTabOpenedSelector = createSelector(
  uiSelector,
  (state: uiState) => state.filterTabOpened
);
export const isDarkModeSelector = createSelector(
  uiSelector,
  (state: uiState) => state.isDarkMode
);
export const langSelector = createSelector(
  uiSelector,
  (state: uiState) => state.lang
);
