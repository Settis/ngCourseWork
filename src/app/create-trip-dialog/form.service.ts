import { Injectable } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Injectable()
export class FormService {

  public form: FormGroup;

  public constructor (private _fb: FormBuilder) {
    this.form = _fb.group({
      name: ['', Validators.required],
      location: ['', Validators.required],
      description: [''],
      image: [''],
    })
  }

}
