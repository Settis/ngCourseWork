import { Component } from '@angular/core';
import {TripService} from '../common/trip.service';
import {FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {

  public zoom: number = 2;
  public places: FirebaseListObservable<Trip[]>;

  constructor(private _tripService: TripService) {
    this.places = _tripService.items;
  }

}
