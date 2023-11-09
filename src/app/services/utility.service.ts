import { Injectable } from '@angular/core';
import { Flight } from '../models/flight.model';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  filterFlights(flights: Flight[], localFilter: any) {
    return flights.filter((flight: Flight) => {
      const airlineMatch = localFilter.airline
        ? flight.airline.code === localFilter.airline
        : true;

      const stopsMatch =
        localFilter.stops != null
          ? flight.tripInfo.length - 2 === localFilter.stops
          : true;

      const priceMatch = localFilter.price
        ? flight.price >= localFilter.price[0] &&
          flight.price <= localFilter.price[1]
        : true;

      return airlineMatch && stopsMatch && priceMatch;
    });
  }

  findMinMaxPrice(flights: Flight[]) {
    if (flights.length === 0) return { min: 0, max: 0 };
    let min = flights[0].price;
    let max = flights[0].price;

    for (let i = 1; i < flights.length; i++) {
      const price = flights[i].price;
      if (price < min) min = price;
      if (price > max) max = price;
    }

    return { min, max };
  }

  getAllUniqueAirlinesWithCode(flights: Flight[]) {
    const uniqueAirlines = new Map();

    flights.forEach((flight: Flight) => {
      const airline = flight.airline;
      if (!uniqueAirlines.has(airline.name)) {
        uniqueAirlines.set(airline.name, airline.code);
      }
    });

    return Array.from(uniqueAirlines, ([name, code]) => ({ name, code }));
  }

  extractUniqueFromTo(flights: Flight[]) {
    const uniqueFrom = new Set();
    const uniqueTo = new Set();

    flights.forEach((airline) => {
      uniqueFrom.add(airline.from);
      uniqueTo.add(airline.to);
    });

    return {
      from: [...uniqueFrom],
      to: [...uniqueTo],
    };
  }
}
