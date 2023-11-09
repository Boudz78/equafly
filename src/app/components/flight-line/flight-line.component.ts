import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { CardModule } from 'primeng/card';
import { TranslateModule } from '@ngx-translate/core';
import { Flight, Trip } from 'src/app/models/flight.model';

@Component({
  selector: 'app-flight-line',
  standalone: true,
  imports: [CommonModule, CardModule, DatePipe, TranslateModule],
  templateUrl: './flight-line.component.html',
  styleUrls: ['./flight-line.component.scss'],
})
export class FlightLineComponent {
  @Input() trip: any;
  @Input() showTripSummary: boolean = false;
}
