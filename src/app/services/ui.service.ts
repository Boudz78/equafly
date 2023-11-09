import { initializeLang, toggleLanguage } from './../store/ui/ui.actions';
import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  filterTabActions,
  initializeTheme,
  sideNavActions,
  toggleTheme,
} from '../store/ui/ui.actions';
import {
  filterTabOpenedSelector,
  isDarkModeSelector,
  langSelector,
  sideNavOpenedSelector,
} from '../store/ui/ui.selectors';
import { Observable, shareReplay, tap } from 'rxjs';
import { themeTypes } from '../models/themes';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private store = inject(Store);

  public language$: Observable<string> = this.store.select(langSelector);

  public sideNavOpenedSelector$: Observable<boolean> = this.store.select(
    sideNavOpenedSelector
  );
  public filterTabOpenedSelector$: Observable<boolean> = this.store.select(
    filterTabOpenedSelector
  );

  public isDarkMode$: Observable<boolean> =
    this.store.select(isDarkModeSelector);

  /* FilterTabs */

  toggleFilterTab() {
    this.store.dispatch(filterTabActions.toggle());
  }
  closeFilterTab() {
    this.store.dispatch(filterTabActions.close());
  }
  openFilterTab() {
    this.store.dispatch(filterTabActions.open());
  }

  /* SideNav */

  toggleSideNav() {
    this.store.dispatch(sideNavActions.toggle());
  }
  closeSideNav() {
    this.store.dispatch(sideNavActions.close());
  }
  openSideNav() {
    this.store.dispatch(sideNavActions.open());
  }

  /* Theme */

  initializeTheme() {
    this.store.dispatch(initializeTheme());
  }

  toggleTheme() {
    this.store.dispatch(toggleTheme());
  }

  /* LANG */

  initializeLanguage() {
    this.store.dispatch(initializeLang());
  }
  toggleLanguage() {
    this.store.dispatch(toggleLanguage());
  }
}
