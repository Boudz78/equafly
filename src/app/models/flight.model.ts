export interface Airline {
  name: string;
  code: string;
}

export interface Trip {
  departureTime: Date;
  country: string;
  airport: string;
}

export interface Flight {
  id: number;
  passengers: number;
  airline: Airline;
  price: number;
  from: string;
  to: string;
  tripInfo: Trip[];
  roundTripInfo: Trip[];
}

export interface localFilter {
  airline: { name: string; code: string } | null;
  stops: number | null;
  price: Array<number> | null;
}
export interface serverFilter {
  fromCountry: string | null | undefined;
  toCountry: string | null | undefined;
  date: Array<Date> | null | undefined;
  tripType: string | null | undefined;
  passengers: number | null | undefined;
}
