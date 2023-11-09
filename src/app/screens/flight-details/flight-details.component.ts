import { AfterViewInit, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FlightLineComponent } from 'src/app/components/flight-line/flight-line.component';
import { CardModule } from 'primeng/card';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { TranslateModule } from '@ngx-translate/core';
import { Flight } from 'src/app/models/flight.model';
import { UiService } from 'src/app/services/ui.service';

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
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  uiService = inject(UiService);

  ngAfterViewInit() {
    console.log(this.activatedRoute.snapshot);

    setTimeout(() => {
      this.selectedFlight = this.activatedRoute.snapshot.data['flightDetails'];
    }, 0);
    console.log(this.selectedFlight);
  }
}
