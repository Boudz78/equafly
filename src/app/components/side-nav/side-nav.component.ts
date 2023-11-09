import { AuthService } from 'src/app/services/auth.service';
import { InputSwitchModule } from 'primeng/inputswitch';
import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { UiService } from 'src/app/services/ui.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ButtonModule } from 'primeng/button';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [
    CommonModule,
    InputSwitchModule,
    SidebarModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    SelectButtonModule,
    TranslateModule,
  ],
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  uiService = inject(UiService);
  authService = inject(AuthService);
  translateService = inject(TranslateService);
  stateOptions: { label: string; value: string }[] = [
    { label: 'English', value: 'en' },
    { label: 'French', value: 'fr' },
  ];

  value: string = 'en';

  ngOnInit(): void {
    this.value = this.translateService.getBrowserLang() ?? 'en';
  }
  onLangChanged() {
    this.uiService.toggleLanguage();
  }
}
