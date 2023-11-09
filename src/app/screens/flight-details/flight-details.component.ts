import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FlightLineComponent } from 'src/app/components/flight-line/flight-line.component';
import { CardModule } from 'primeng/card';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { TranslateModule } from '@ngx-translate/core';
import { Flight } from 'src/app/models/flight.model';

@Component({
  selector: 'app-flight-details',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FlightLineComponent,
    CardModule,
    InputMaskModule,
    InputTextModule,
    TranslateModule,
    CalendarModule,
  ],
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.scss'],
})
export class FlightDetailsComponent implements AfterViewInit {
  selectedFlight: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngAfterViewInit() {
    console.log(this.activatedRoute.snapshot);

    this.selectedFlight = this.activatedRoute.snapshot.data['flightDetails'];
    console.log(this.selectedFlight);
  }
}
