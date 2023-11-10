import { MessageService } from 'primeng/api';
import { FlightLineComponent } from 'src/app/components/flight-line/flight-line.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AfterViewInit, Component, inject } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { TranslateModule } from '@ngx-translate/core';
import { Flight } from 'src/app/models/flight.model';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

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
    ReactiveFormsModule,
  ],
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.scss'],
})
export class FlightDetailsComponent implements AfterViewInit {
  messageService = inject(MessageService);
  activatedRoute = inject(ActivatedRoute);
  selectedFlight: Flight | undefined;
  uiService = inject(UiService);
  fb = inject(FormBuilder);
  router = inject(Router);

  ccForm = this.fb.group({
    cardNumber: [null, Validators.required],
    expiryDate: [null, Validators.required],
    Name: [null, Validators.required],
    CVV: [null, Validators.required],
  });

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.selectedFlight = this.activatedRoute.snapshot.data['flightDetails'];
    }, 0);
  }

  submitForm(): void {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Payment Successful. Please check your email.',
    });
    this.router.navigate(['/']);
  }
}
