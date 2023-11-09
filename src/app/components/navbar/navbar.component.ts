import { UiService } from 'src/app/services/ui.service';
import { MenubarModule } from 'primeng/menubar';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, MenubarModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  authService = inject(AuthService);
  UiService = inject(UiService);
}
