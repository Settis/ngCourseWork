import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.css']
})
export class CreateTripComponent {

  @Output()
  public onCreate: EventEmitter<Trip> = new EventEmitter();

  public name: string;
  public description: string;
  public image: string;

  public save(): void {
    this.onCreate.next({
      'name': this.name,
      'description': this.description,
      'image': this.image,
      'places': []
    })
  }
}
