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
  public asc: boolean = true;
  public order: string;
  public filter: string;

  public constructor(private _trip: TripService) {
    this.trips = this._trip.items;
  }

  public toggleAsc(): void {
    this.asc = !this.asc;
  }

  public setOrder(order: string): void {
    this.order = order;
  }

  public setFilter(filter: string): void {
    this.filter = filter;
  }

}
