import { TestBed, inject } from '@angular/core/testing';
import { CreateTripService } from './create-trip.service';

describe('CreateTripService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateTripService]
    });
  });

  it('should ...', inject([CreateTripService], (service: CreateTripService) => {
    expect(service).toBeTruthy();
  }));
});
