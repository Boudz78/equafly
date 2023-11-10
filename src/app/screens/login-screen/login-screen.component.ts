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
import { MessageService } from 'primeng/api';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

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
    ReactiveFormsModule,
    TranslateModule,
  ],
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss'],
})
export class LoginScreenComponent {
  MessageService = inject(MessageService);
  authService = inject(AuthService);
  uiService = inject(UiService);
  fb = inject(FormBuilder);

  loginForm = this.fb.group({
    email: [null, Validators.required],
    password: [null, Validators.required],
  });

  didClickLogin(payload?: authPayload) {
    // this.MessageService.
    // return;
    this.authService.attemptToLogin({ email: 'abdallah', password: 'hello' });
  }
}
