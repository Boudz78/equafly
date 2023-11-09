import { createReducer, on } from '@ngrx/store';
import {
  filterTabActions,
  sideNavActions,
  toggleLanguage,
  toggleTheme,
} from './ui.actions';

export interface uiState {
  sideNavOpened: boolean;
  filterTabOpened: boolean;
  isDarkMode: boolean;
  lang: string;
}

export const initialState: uiState = {
  sideNavOpened: false,
  filterTabOpened: false,
  isDarkMode: false,
  lang: 'en',
};

export const uiReducer = createReducer(
  initialState,
  on(filterTabActions.open, (state) => ({ ...state, filterTabOpened: true })),
  on(filterTabActions.close, (state) => ({ ...state, filterTabOpened: false })),
  on(filterTabActions.toggle, (state) => ({
    ...state,
    filterTabOpened: !state.filterTabOpened,
  })),
  on(sideNavActions.open, (state) => ({ ...state, sideNavOpened: true })),
  on(sideNavActions.close, (state) => ({ ...state, sideNavOpened: false })),
  on(sideNavActions.toggle, (state) => ({
    ...state,
    sideNavOpened: !state.sideNavOpened,
  })),
  on(toggleTheme, (state) => ({ ...state, isDarkMode: !state.isDarkMode })),
  on(toggleLanguage, (state) => ({
    ...state,
    lang: state.lang === 'en' ? 'fr' : 'en',
  }))
);
