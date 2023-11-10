import { CommonModule, DatePipe } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Flight } from 'src/app/models/flight.model';
import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-flight-line',
  standalone: true,
  imports: [CommonModule, CardModule, DatePipe, TranslateModule],
  templateUrl: './flight-line.component.html',
  styleUrls: ['./flight-line.component.scss'],
})
export class FlightLineComponent {
  @Input() trip: Flight | undefined;
  @Input() showTripSummary: boolean = false;
}
