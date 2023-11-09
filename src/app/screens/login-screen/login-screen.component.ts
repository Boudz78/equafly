import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { AuthService } from 'src/app/services/auth.service';
import { RadioButtonModule } from 'primeng/radiobutton';
import { UiService } from './../../services/ui.service';
import { authPayload } from 'src/app/models/auth.types';
import { InputTextModule } from 'primeng/inputtext';
import { Component, inject } from '@angular/core';
import { CheckboxModule } from 'primeng/checkbox';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-login-screen',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    CheckboxModule,
    RadioButtonModule,
    ProgressSpinnerModule,
    TranslateModule,
  ],
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss'],
})
export class LoginScreenComponent {
  uiService = inject(UiService);
  authService = inject(AuthService);

  didClickLogin(payload?: authPayload) {
    this.authService.attemptToLogin({ email: 'abdallah', password: 'hello' });
  }
}
