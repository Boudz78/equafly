import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component, EventEmitter, Output, inject } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TranslateModule } from '@ngx-translate/core';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { serverFilter } from 'src/app/models/flight.model';

@Component({
  selector: 'app-flight-search',
  standalone: true,
  imports: [
    CommonModule,
    DropdownModule,
    CalendarModule,
    RadioButtonModule,
    ReactiveFormsModule,
    TranslateModule,
    CardModule,
    FormsModule,
  ],
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss'],
})
export class FlightSearchComponent {
  @Output() didFilter: EventEmitter<serverFilter> =
    new EventEmitter<serverFilter>();

  apiService = inject(ApiService);
  fb: FormBuilder = inject(FormBuilder);

  filterForm = this.fb.group({
    fromCountry: [],
    toCountry: [],
    date: [],
    tripType: [],
    passengers: [],
  });

  //Static Data
  countries: Array<any> = [
    { label: 'Lebanon', code: 'Lebanon' },
    // { label: 'Brazil', code: 'BR' },
    // { label: 'China', code: 'CN' },
    // { label: 'Egypt', code: 'EG' },
    // { label: 'France', code: 'FR' },
    // { label: 'Germany', code: 'DE' },
    // { label: 'India', code: 'IN' },
    // { label: 'Japan', code: 'JP' },
    // { label: 'Spain', code: 'ES' },
    // { label: 'United States', code: 'US' },
  ];
  toCountries = [
    { label: 'Lebanon', code: 'Lebanon' },
    // { label: 'Brazil', code: 'BR' },
    // { label: 'China', code: 'CN' },
    // { label: 'Egypt', code: 'EG' },
    // { label: 'France', code: 'FR' },
    // { label: 'Germany', code: 'DE' },
    // { label: 'India', code: 'IN' },
    // { label: 'Japan', code: 'JP' },
    // { label: 'Spain', code: 'ES' },
    // { label: 'United States', code: 'US' },
  ];
  tripTypes = [
    { label: 'Round trip', code: 'RT' },
    { label: 'One Way', code: 'OW' },
  ];
  passengers = [
    { label: '1 Passenger', code: 1 },
    { label: '2 Passengers', code: 2 },
    { label: '3 Passengers', code: 3 },
    { label: '4 Passengers', code: 4 },
    { label: '5 Passengers', code: 5 },
  ];
  submitSearch() {
    this.didFilter.emit(this.filterForm.value as any);
  }
}
