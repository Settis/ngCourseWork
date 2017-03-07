import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FirebaseObjectObservable} from 'angularfire2';
import {TripService} from '../common/trip.service';

@Component({
  selector: 'app-trip-info',
  templateUrl: './trip-info.component.html',
  styleUrls: ['./trip-info.component.css']
})
export class TripInfoComponent implements OnInit {

  public id: string;
  public trip: FirebaseObjectObservable<Trip>;

  public constructor(private _activatedRoute: ActivatedRoute,
                     private _tripService: TripService) { }

  public ngOnInit(): void {
    this._activatedRoute.params.subscribe(
      (params: {id: string}) => {
        this.id = params.id;
        this.trip = this._tripService.get(this.id);
      });
  }

  public delete(): void {
    this._tripService.delete(this.id);
  }

}
