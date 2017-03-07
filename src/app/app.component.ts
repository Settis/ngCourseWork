import { Component } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { TripService } from './common/trip.service';
import {CreateTripService} from './common/create-trip.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public items: FirebaseListObservable<Trip[]>;
  public constructor(private _tripService: TripService,
                     private _createTripService: CreateTripService) {
    this.items = _tripService.items;
  }

  public openAddTripDialog(): void {
    this._createTripService.openDialog();
  }
}
