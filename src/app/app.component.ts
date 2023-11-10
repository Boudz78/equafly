import { SideNavComponent } from './components/side-nav/side-nav.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from './services/auth.service';
import { UiService } from './services/ui.service';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SideNavComponent,
    NavbarComponent,
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    FormsModule,
    ToastModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  translateService = inject(TranslateService);
  uiService = inject(UiService);

  ngOnInit(): void {
    this.uiService.initializeLanguage();
    this.uiService.initializeTheme();
  }
}
