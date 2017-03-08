import { TestBed, inject } from '@angular/core/testing';
import { ChooseMapPointService } from './choose-map-point.service';

describe('ChooseMapPointService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChooseMapPointService]
    });
  });

  it('should ...', inject([ChooseMapPointService], (service: ChooseMapPointService) => {
    expect(service).toBeTruthy();
  }));
});
