import { Injectable } from '@angular/core';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';

@Injectable()
export class TripService {
  public items: FirebaseListObservable<Trip[]>;
  public constructor(private _af: AngularFire) {
    this.items = _af.database.list('/trips');
  }

  public add(trip: Trip): void {
    this.items.push(trip);
  }

  public get(id: string): FirebaseObjectObservable<Trip> {
    return this._af.database.object('/trips/' + id);
  }

  public delete(id: string): void {
    this._af.database.object('/trips/' + id).remove();
  }

}
