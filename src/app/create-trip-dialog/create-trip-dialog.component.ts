import { Component } from '@angular/core';
import {MdDialogRef} from '@angular/material';
import {FormService} from './form.service';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-create-trip-dialog',
  templateUrl: './create-trip-dialog.component.html',
  styleUrls: ['./create-trip-dialog.component.css'],
  providers: [FormService]
})
export class CreateTripDialogComponent {

  public form: FormGroup;

  constructor(public dialogRef: MdDialogRef<CreateTripDialogComponent>,
              private _formService: FormService) {
    this.form = _formService.form;
  }

  public createTrip(): void {
    this.dialogRef.close(this.form.getRawValue());
  }
}
