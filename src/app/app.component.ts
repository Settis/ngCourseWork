import { Component } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public items: FirebaseListObservable<Trip[]>;
  public constructor(private _af: AngularFire) {
    this.items = _af.database.list('/items');
  }

  public add(trip: Trip) {
    console.log("add trip " + trip);
    this.items.push(trip);
  }
}
