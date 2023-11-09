import { authState } from '../store/auth/auth.reducer';
import { uiState } from '../store/ui/ui.reducer';

export interface AppState {
  ui: uiState;
  auth: authState;
}
