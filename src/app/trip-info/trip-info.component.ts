import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TripService} from '../common/trip.service';

@Component({
  selector: 'app-trip-info',
  templateUrl: './trip-info.component.html',
  styleUrls: ['./trip-info.component.css']
})
export class TripInfoComponent implements OnInit {

  public id: string;
  public trip: Trip;

  public constructor(private _activatedRoute: ActivatedRoute,
                     private _tripService: TripService) { }

  public ngOnInit(): void {
    this._activatedRoute.params.subscribe(
      (params: {id: string}) => {
        this.id = params.id;
        this._tripService.get(this.id).subscribe((trip: Trip) => this.trip = trip);
      });
  }

  public delete(): void {
    this._tripService.delete(this.id);
  }

}
