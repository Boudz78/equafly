import {
  FormBuilder,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CommonModule } from '@angular/common';
import { SliderModule } from 'primeng/slider';
import { CardModule } from 'primeng/card';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  inject,
  OnInit,
} from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TranslateModule } from '@ngx-translate/core';
import { UtilityService } from 'src/app/services/utility.service';
import { Flight, localFilter } from 'src/app/models/flight.model';

@Component({
  selector: 'app-flight-filter',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    CardModule,
    RadioButtonModule,
    ButtonModule,
    SliderModule,
    TranslateModule,
  ],
  templateUrl: './flight-filter.component.html',
  styleUrls: ['./flight-filter.component.scss'],
})
export class FlightFilterComponent implements OnInit {
  fb: FormBuilder = inject(FormBuilder);
  utilityService: UtilityService = inject(UtilityService);
  @Input() flights: Flight[] | undefined;
  @Output() didFilter: EventEmitter<localFilter> =
    new EventEmitter<localFilter>();
  rangeValues: number[] = [20, 80];
  value = 0;
  filterForm = this.fb.group({
    airline: [],
    stops: [],
    price: [[20, 50]],
  });

  /* Dynamic Filtering for Airlines */
  uniqueAirlines: Array<{ name: string; code: string }> = [];
  /* Dynamic Filtering for Price */
  minPrice = 0;
  maxPrice = 0;

  ngOnInit(): void {
    if (this.flights) {
      const { min, max } = this.utilityService.findMinMaxPrice(this.flights);
      this.minPrice = min;
      this.maxPrice = max;
      this.filterForm.patchValue({ price: [this.minPrice, this.maxPrice] });
      this.uniqueAirlines = this.utilityService.getAllUniqueAirlinesWithCode(
        this.flights
      );
    }
  }

  triggerFilter() {
    this.didFilter.emit(this.filterForm.value as any);
  }
  clearFilter() {
    this.didFilter.emit({ airline: null, stops: null, price: null });
  }
}
