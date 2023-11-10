import { FlightFilterComponent } from 'src/app/components/flight-filter/flight-filter.component';
import { FlightSearchComponent } from 'src/app/components/flight-search/flight-search.component';
import { FlightLineComponent } from 'src/app/components/flight-line/flight-line.component';
import { localFilter, serverFilter } from 'src/app/models/flight.model';
import { collapseExpand, fadeIn } from 'src/app/animations/animations';
import { UtilityService } from 'src/app/services/utility.service';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { Component, HostListener, inject } from '@angular/core';
import { BehaviorSubject, map, switchMap, tap } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { RadioButtonModule } from 'primeng/radiobutton';
import { UiService } from 'src/app/services/ui.service';
import { Router, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { PaginatorModule } from 'primeng/paginator';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { SidebarModule } from 'primeng/sidebar';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-home-screen',
  animations: [collapseExpand, fadeIn],
  standalone: true,
  imports: [
    CommonModule,
    DropdownModule,
    CalendarModule,
    RadioButtonModule,
    FlightLineComponent,
    ProgressSpinnerModule,
    FlightSearchComponent,
    FlightFilterComponent,
    NgxPaginationModule,
    PaginatorModule,
    TranslateModule,
    RouterModule,
    SidebarModule,
    CardModule,
  ],
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss'],
})
export class HomeScreenComponent {
  /******* Services *******/
  utilityService = inject(UtilityService);
  apiService = inject(ApiService);
  uiService = inject(UiService);
  router = inject(Router);

  /******* Observables *******/

  // Initialize triggerDidSearch$ with BehaviorSubject or ReplaySubject
  // Assuming filters is an object containing your initial filter criteria.
  triggerDidSearch$ = new BehaviorSubject<serverFilter | undefined>(undefined);

  // Later on, when you want to trigger the search with the current filters, you do:
  displayedFlights$ = this.triggerDidSearch$.pipe(
    tap((entryValue) => {
      if (!this.searchedOnce && entryValue === undefined) return;
      this.isLoading = true;
      this.searchedOnce = true;
    }),
    switchMap((filters) =>
      this.apiService.filterFlights(filters).pipe(
        map((flights) => {
          return this.utilityService.filterFlights(flights, this.localFilter);
        }),
        tap(() => {
          this.isLoading = false;
        })
      )
    )
  );
  localFilter: localFilter = { airline: null, stops: null, price: null };
  /******* mini-states *******/
  searchedOnce = false;
  isLoading = false;

  /******* Template Helpers *******/
  p = 1;
  Math = Math;

  ngOnInit() {
    this.uiService.closeFilterTab();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.uiService.closeFilterTab();
  }

  navigateToFlightDetails(id: number) {
    this.router.navigate(['flightDetails', id]);
  }
  didFilter(filters?: serverFilter) {
    this.localFilter = { airline: null, stops: null, price: null };
    this.triggerDidSearch$.next(filters ?? undefined);
  }

  didFilterLocally(filters: localFilter) {
    this.uiService.closeFilterTab();
    this.localFilter = filters;
    this.triggerDidSearch$.next(this.triggerDidSearch$.getValue());
  }
}
