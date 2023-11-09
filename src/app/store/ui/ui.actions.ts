import { createAction, createActionGroup, emptyProps } from '@ngrx/store';

export enum uiActionTypes {
  SIDE_NAV = 'SideNav',
  FILTER_TAB = 'FilterTab',
  INITIALIZE_THEME = '[UI] Initializing Theme',
  TOGGLE_THEME = '[UI] Toggle Theme',
  TOGGLE_LANG = '[UI] Toggle Language',
  INITIALIZE_LANG = '[UI] Initializing Language',
}

/****** SIDENAV ******/
export const sideNavActions = createActionGroup({
  source: uiActionTypes.SIDE_NAV,
  events: {
    close: emptyProps(),
    open: emptyProps(),
    toggle: emptyProps(),
  },
});

/****** FilterTab ******/
export const filterTabActions = createActionGroup({
  source: uiActionTypes.FILTER_TAB,
  events: {
    close: emptyProps(),
    open: emptyProps(),
    toggle: emptyProps(),
  },
});

/****** Theme ******/
export const toggleTheme = createAction(uiActionTypes.TOGGLE_THEME);
export const initializeTheme = createAction(uiActionTypes.INITIALIZE_THEME);

/****** Language ******/
export const toggleLanguage = createAction(uiActionTypes.TOGGLE_LANG);
export const initializeLang = createAction(uiActionTypes.INITIALIZE_LANG);
