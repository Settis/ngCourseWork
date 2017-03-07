import { Component } from '@angular/core';
import {TripService} from '../common/trip.service';
import {FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public trips: FirebaseListObservable<Trip[]>;

  constructor(private _trip: TripService) {
    this.trips = this._trip.items;
  }

}
