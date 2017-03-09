import {Component, OnInit} from '@angular/core';
import {TripService} from '../common/trip.service';
import {FirebaseListObservable} from 'angularfire2';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public trips: FirebaseListObservable<Trip[]>;
  public asc: boolean = true;
  public order: string;
  public filter: string = '';

  public constructor(private _trip: TripService,
                     private _activatedRoute: ActivatedRoute,
                     private _router: Router) {
    this.trips = this._trip.items;
  }

  public ngOnInit(): void {
    this._activatedRoute.queryParams.subscribe((params: ListQueryParams) => {
      if (params) {
        this.filter = params.filter || '';
        this.order = params.order;
        this.asc = params.asc;
      }
    });
  }

  public toggleAsc(): void {
    this.asc = !this.asc;
    this.updateNav();
  }

  public setOrder(order: string): void {
    this.order = order;
    this.updateNav();
  }

  public setFilter(filter: string): void {
    this.filter = filter;
    this.updateNav();
  }

  private updateNav(): void {
    const params: ListQueryParams = {
      filter: this.filter,
      order: this.order,
      asc: this.asc,
    };
    this._router.navigate(['/list'], {queryParams: params});
  }

}
