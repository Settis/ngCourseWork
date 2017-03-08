import { Component } from '@angular/core';
import {MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-choose-point',
  templateUrl: './choose-point.component.html',
  styleUrls: ['./choose-point.component.css']
})
export class ChoosePointComponent {

  public lat: number;
  public lng: number;

  public zoom: number = 2;

  public constructor(public dialogRef: MdDialogRef<ChoosePointComponent>) {};

  public mapClicked(event: any): void {
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
  }

  public choose(): void {
    const coord: LatLng = {
      lat: this.lat,
      lng: this.lng,
    };
    this.dialogRef.close(coord);
  }
}
