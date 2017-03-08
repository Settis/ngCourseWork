import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tripFilter'
})
export class TripFilterPipe implements PipeTransform {

  public transform(input: Trip[], pattern: string): Trip[] {
    if (!input)
      return [];
    if (!pattern)
      return input;
    return input.filter((trip: Trip): boolean => {
      const reg: RegExp = new RegExp(pattern, 'gi');
      return reg.test(trip.name) || reg.test(trip.location);
    });
  }

}
