import { mockAirlinesResult } from 'src/app/mock/mock-data';
import { Observable, delay, map, of } from 'rxjs';
import { Flight, serverFilter } from '../models/flight.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  login() {
    return of({ token: 'JWTTOKENRETRIEVED' }).pipe(delay(3000));
  }
  getFlights() {
    return of(mockAirlinesResult).pipe(delay(1000));
  }

  getFlightByID(id: number) {
    return of(mockAirlinesResult).pipe(
      map((airlines) => airlines.find((airline) => airline.id + '' === id + ''))
    );
  }

  filterFlights(filters?: serverFilter): Observable<Flight[]> {
    return of(
      mockAirlinesResult.filter((flight: Flight) => {
        if (!filters) {
          return true;
        }
        if (
          filters.passengers !== null &&
          flight.passengers !== filters.passengers
        ) {
          return false;
        }

        if (
          filters.fromCountry !== null &&
          flight.from !== filters.fromCountry
        ) {
          return false;
        }

        if (filters.toCountry !== null && flight.to !== filters.toCountry) {
          return false;
        }

        if (Array.isArray(filters.date) && filters.date.length === 2) {
          const tripDate = new Date(flight.tripInfo[0].departureTime);
          const startDate = new Date(filters.date[0]);
          const endDate = new Date(filters.date[1]);
          if (tripDate < startDate || tripDate > endDate) {
            return false;
          }
        }

        const isRoundTrip =
          flight.roundTripInfo && flight.roundTripInfo.length > 0;
        if (filters.tripType === 'OW' && isRoundTrip) {
          return false;
        }
        if (filters.tripType === 'RT' && !isRoundTrip) {
          return false;
        }

        return true;
      })
    ).pipe(delay(1000));
  }
}
