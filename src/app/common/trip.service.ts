import { Injectable } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Injectable()
export class TripService {
  public items: FirebaseListObservable<Trip[]>;
  constructor(private _af: AngularFire) {
    this.items = _af.database.list('/trips');
  }

  public add(trip: Trip) {
    this.items.push(trip);
  }

}
