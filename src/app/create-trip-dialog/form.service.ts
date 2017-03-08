import { Injectable } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {CountryListService} from '../common/country-list.service';
import {Observable} from 'rxjs';

import 'rxjs/add/operator/startWith';
import {ErrorMessagesService} from '../common/error-messages.service';

@Injectable()
export class FormService {

  public form: FormGroup;
  public filteredCountries: Observable<String[]>;

  public formErrors: {[key: string]: string} = {
    'name': '',
    'location': '',
    'lat': '',
    'lng': '',
  };

  public constructor (private _fb: FormBuilder,
                      private _countryList: CountryListService,
                      private _errorMessage: ErrorMessagesService) {
    this.form = _fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^[\w ]+$/)]],
      location: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^[\w ]+$/)]],
      description: [''],
      image: [''],
      lat: ['', [Validators.required, Validators.pattern(/^-?\d+\.\d+$/)]],
      lng: ['', [Validators.required, Validators.pattern(/^-?\d+\.\d+$/)]],
    });
    this.filteredCountries = this.form.get('location').valueChanges
      .startWith(null)
      .map(location => this.filterCountries(location));
    this.form.valueChanges.subscribe(() => this.checkForm());
    this.checkForm();
  }

  private filterCountries(val: string): String[] {
    return val ? this._countryList.countries.filter((s:string) => new RegExp(val, 'gi').test(s)) : this._countryList.countries;
  }

  private checkForm(): void {
    this._errorMessage.setFormErrorMessages(this.form, this.formErrors)
  }

}
