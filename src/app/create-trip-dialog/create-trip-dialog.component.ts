import { Component } from '@angular/core';
import {MdDialogRef} from '@angular/material';
import {FormService} from './form.service';
import {FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-create-trip-dialog',
  templateUrl: './create-trip-dialog.component.html',
  styleUrls: ['./create-trip-dialog.component.css'],
  providers: [FormService]
})
export class CreateTripDialogComponent {

  public form: FormGroup;
  public filteredCountries: Observable<String[]>;

  constructor(public dialogRef: MdDialogRef<CreateTripDialogComponent>,
              private _formService: FormService) {
    this.form = _formService.form;
    this.filteredCountries = _formService.filteredCountries;
  }

  public createTrip(): void {
    this.dialogRef.close(this.form.getRawValue());
  }

}
