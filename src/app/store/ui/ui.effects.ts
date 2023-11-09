import { ofType, Actions, createEffect } from '@ngrx/effects';
import { langSelector, uiSelector } from './ui.selectors';
import { uiActionTypes } from './ui.actions';
import { Injectable, inject } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { EMPTY, map, tap, withLatestFrom } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { AppState } from '../app.state';

@Injectable()
export class UIEffects {
  private actions$ = inject(Actions);
  private store = inject(Store<AppState>);
  private translate = inject(TranslateService);

  toggleTheme$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(uiActionTypes.TOGGLE_THEME, uiActionTypes.INITIALIZE_THEME),
        withLatestFrom(this.store.pipe(select(uiSelector))),
        map(([_action, stateSlice]) => {
          const isDarkMode = stateSlice.isDarkMode ? 'dark' : 'light';
          const themeLink = document.getElementById(
            'app-theme'
          ) as HTMLLinkElement;
          if (themeLink) {
            themeLink.href = `${isDarkMode}.css`;
          }
        })
      ),
    { dispatch: false }
  );

  toggleLanguage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(uiActionTypes.TOGGLE_LANG, uiActionTypes.INITIALIZE_LANG),
        withLatestFrom(this.store.pipe(select(langSelector))),
        tap(([_action, lang]) => {
          this.translate.setDefaultLang(lang);
        })
      ),
    { dispatch: false }
  );
}
