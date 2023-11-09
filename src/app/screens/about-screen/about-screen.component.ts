import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about-screen',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './about-screen.component.html',
  styleUrls: ['./about-screen.component.scss'],
})
export class AboutScreenComponent {}
