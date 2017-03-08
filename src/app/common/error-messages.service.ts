import { Injectable } from '@angular/core';
import {FormGroup, AbstractControl} from '@angular/forms';

@Injectable()
export class ErrorMessagesService {

  private validationMessages: {[key: string]: {[key: string]: string}} = {
    'name': {
      'required': 'Name is required.',
      'minlength': 'Name must be at least 3 characters long.',
      'pattern': 'Name must contain only latin letters and spaces.',
    },
    'location': {
      'required': 'Location is required.',
      'minlength': 'Location must be at least 3 characters long.',
      'pattern': 'Location must contain only latin letters and spaces.',
    },
    'lat': {
      'required': 'Latitude is required.',
      'pattern': 'Latitude must be a number.',
    },
    'lng': {
      'required': 'Longitude is required.',
      'pattern': 'Longitude must be a number.',
    },
  };

  public setFormErrorMessages(form: FormGroup, errors: {[key: string]: string}): void {
    if (!form) { return; }
    for (const field in errors) {
      const control: AbstractControl = form.get(field);
      if (control && !control.valid) {
        errors[field] = this.getControlErrorMessages(control, this.validationMessages[field]);
      } else {
        errors[field] = '';
      }
    }
  }

  public getControlErrorMessages(control: AbstractControl, messages: {[key: string]: string}): string {
    let errorMessages: string = '';
    for (const key in control.errors) {
      if (control.errors[key]) {
        errorMessages += messages[key] + ' ';
      }
    }
    return errorMessages;
  }

}
