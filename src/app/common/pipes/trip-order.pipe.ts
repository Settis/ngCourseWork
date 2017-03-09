import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tripOrder'
})
export class TripOrderPipe implements PipeTransform {

  public transform(input: Trip[], by: string, asc: boolean): Trip[] {
    switch (by) {
      case 'name':
        return input.sort(this.sortBy(this.getName, asc));
      case 'location':
        return input.sort(this.sortBy(this.getLocation, asc));
      default:
        return input;
    }
  }

  public sortBy(func: (t: Trip) => string, asc: boolean): (a: Trip, b: Trip) => number {
    return (a: Trip, b: Trip): number => {
      const aVal: string = func(a);
      const bVal: string = func(b);
      if (aVal === bVal)
        return 0;
      let result: number = aVal > bVal ? 1 : -1;
      if (!asc)
        result *= -1;
      return result;
    };
  }

  public getName(t: Trip): string {
    return t.name;
  }

  public getLocation(t: Trip): string {
    return t.location;
}

}
