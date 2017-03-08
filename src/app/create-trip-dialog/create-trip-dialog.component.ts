import { Component } from '@angular/core';
import {MdDialogRef} from '@angular/material';
import {FormService} from './form.service';
import {FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {ChooseMapPointService} from '../common/choose-map-point.service';

@Component({
  selector: 'app-create-trip-dialog',
  templateUrl: './create-trip-dialog.component.html',
  styleUrls: ['./create-trip-dialog.component.css'],
  providers: [FormService]
})
export class CreateTripDialogComponent {

  public form: FormGroup;
  public filteredCountries: Observable<String[]>;
  public formErrors: {[key: string]: string};

  constructor(public dialogRef: MdDialogRef<CreateTripDialogComponent>,
              private _formService: FormService,
              private _choosePoint: ChooseMapPointService) {
    this.form = _formService.form;
    this.filteredCountries = _formService.filteredCountries;
    this.formErrors = _formService.formErrors;
  }

  public createTrip(): void {
    const trip: Trip = {
      name: this.form.getRawValue().name,
      location: this.form.getRawValue().location,
      description: this.form.getRawValue().description,
      image: this.form.getRawValue().image,
      lat: parseFloat(this.form.getRawValue().lat),
      lng: parseFloat(this.form.getRawValue().lng),
    };
    this.dialogRef.close(trip);
  }

  public chooseCoordinates(): void {
    this._choosePoint.openDialog(this.setCoord.bind(this));
  }

  public setCoord(coord: LatLng): void {
    this.form.get('lat').setValue(coord.lat);
    this.form.get('lng').setValue(coord.lng);
  }

}
