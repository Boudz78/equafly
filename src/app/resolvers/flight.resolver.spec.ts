import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';
import { flightResolver } from './flight.resolver';

describe('flightResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) =>
    TestBed.runInInjectionContext(() => flightResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
